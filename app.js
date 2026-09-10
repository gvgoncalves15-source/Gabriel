const { createClient } = supabase;
const sb = createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

let currentProfile = null;

/* ---------------- AUTH ---------------- */

async function initAuth() {
  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    await onLoggedIn(session);
  } else {
    showLogin();
  }

  sb.auth.onAuthStateChange(async (event, session) => {
    if (event === "SIGNED_IN" && session) {
      await onLoggedIn(session);
    } else if (event === "SIGNED_OUT") {
      showLogin();
    }
  });
}

function showLogin() {
  $("#login-screen").classList.remove("hidden");
  $("#app-shell").classList.add("hidden");
}

async function onLoggedIn(session) {
  $("#login-screen").classList.add("hidden");
  $("#app-shell").classList.remove("hidden");

  let { data: profile } = await sb.from("profiles").select("*").eq("id", session.user.id).single();
  currentProfile = profile;

  $("#user-name").textContent = profile?.nome || session.user.email;
  $("#user-role").textContent = roleLabel(profile?.role);

  if (profile?.role !== "admin" && profile?.role !== "supervisor") {
    $("#lgpd-warning").classList.remove("hidden");
    $("#lgpd-form-wrap").classList.add("hidden");
  } else {
    $("#lgpd-warning").classList.add("hidden");
    $("#lgpd-form-wrap").classList.remove("hidden");
  }

  loadPainel();
  loadClientes();
  loadEscalas();
  loadFuncionarios();
  loadOcorrencias();
}

function roleLabel(role) {
  return { admin: "Administrador", supervisor: "Supervisor", operador: "Operador" }[role] || "Operador";
}

$("#form-login").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = $("#login-email").value.trim();
  const senha = $("#login-senha").value;
  $("#login-erro").classList.add("hidden");
  const { error } = await sb.auth.signInWithPassword({ email, password: senha });
  if (error) {
    $("#login-erro").textContent = error.message;
    $("#login-erro").classList.remove("hidden");
  }
});

$("#form-cadastro").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = $("#cadastro-email").value.trim();
  const senha = $("#cadastro-senha").value;
  const nome = $("#cadastro-nome").value.trim();
  $("#cadastro-erro").classList.add("hidden");
  const { error } = await sb.auth.signUp({ email, password: senha, options: { data: { nome } } });
  if (error) {
    $("#cadastro-erro").textContent = error.message;
    $("#cadastro-erro").classList.remove("hidden");
  } else {
    $("#cadastro-erro").textContent = "Conta criada! Verifique seu e-mail se a confirmação estiver ativa, ou já pode entrar.";
    $("#cadastro-erro").classList.remove("hidden", "text-error");
    $("#cadastro-erro").classList.add("text-secondary");
  }
});

$("#btn-logout").addEventListener("click", () => sb.auth.signOut());

$$(".toggle-auth").forEach((btn) =>
  btn.addEventListener("click", () => {
    $("#login-box").classList.toggle("hidden");
    $("#cadastro-box").classList.toggle("hidden");
  })
);

/* ---------------- NAV ---------------- */

$$("[data-nav]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const path = link.getAttribute("data-nav");
    $$("[data-page]").forEach((p) => p.classList.add("hidden"));
    $(`[data-page="${path}"]`).classList.remove("hidden");
    $$("[data-nav]").forEach((l) => l.classList.remove("bg-primary-container", "text-white"));
    link.classList.add("bg-primary-container", "text-white");
  });
});

/* ---------------- PAINEL ---------------- */

async function loadPainel() {
  const [{ count: totalClientes }, { count: granel }, { count: cilindro }] = await Promise.all([
    sb.from("clientes").select("*", { count: "exact", head: true }),
    sb.from("clientes").select("*", { count: "exact", head: true }).eq("tipo", "granel"),
    sb.from("clientes").select("*", { count: "exact", head: true }).eq("tipo", "cilindro"),
  ]);
  const { count: ocorrenciasAbertas } = await sb
    .from("ocorrencias")
    .select("*", { count: "exact", head: true })
    .neq("status", "resolvida");
  const { count: escalasHoje } = await sb
    .from("escalas")
    .select("*", { count: "exact", head: true })
    .eq("data", new Date().toISOString().slice(0, 10));

  $("#kpi-total-clientes").textContent = totalClientes ?? 0;
  $("#kpi-granel").textContent = granel ?? 0;
  $("#kpi-cilindro").textContent = cilindro ?? 0;
  $("#kpi-ocorrencias").textContent = ocorrenciasAbertas ?? 0;
  $("#kpi-escalas-hoje").textContent = escalasHoje ?? 0;

  const { data: ultimasOcorrencias } = await sb
    .from("ocorrencias")
    .select("titulo, severidade, status, aberta_em")
    .order("aberta_em", { ascending: false })
    .limit(5);
  $("#painel-ultimas-ocorrencias").innerHTML = (ultimasOcorrencias || [])
    .map(
      (o) => `<li class="flex items-center justify-between py-2 border-b border-outline-variant/30">
        <span>${escapeHtml(o.titulo)}</span>
        ${badge(o.severidade)}
      </li>`
    )
    .join("") || `<li class="text-on-surface-variant py-2">Nenhuma ocorrência registrada ainda.</li>`;
}

/* ---------------- CLIENTES ---------------- */

async function loadClientes() {
  const { data, error } = await sb.from("clientes").select("*").order("created_at", { ascending: false });
  if (error) return console.error(error);
  $("#tabela-clientes").innerHTML = (data || [])
    .map(
      (c) => `<tr class="border-b border-outline-variant/30 hover:bg-surface-container-low">
        <td class="py-2 px-3 font-medium">${escapeHtml(c.codigo || "-")}</td>
        <td class="py-2 px-3">${escapeHtml(c.nome)}</td>
        <td class="py-2 px-3">${c.tipo === "granel" ? "Granel" : "Cilindro"}</td>
        <td class="py-2 px-3">${escapeHtml(c.cidade || "-")}</td>
        <td class="py-2 px-3">${badge(c.status)}</td>
        <td class="py-2 px-3 text-right">
          <button class="text-error text-sm" onclick="excluirCliente('${c.id}')">Excluir</button>
        </td>
      </tr>`
    )
    .join("") || `<tr><td colspan="6" class="py-6 text-center text-on-surface-variant">Nenhum cliente cadastrado ainda.</td></tr>`;
}

$("#form-cliente").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    codigo: $("#cliente-codigo").value.trim() || null,
    tipo: $("#cliente-tipo").value,
    nome: $("#cliente-nome").value.trim(),
    cidade: $("#cliente-cidade").value.trim() || null,
    endereco: $("#cliente-endereco").value.trim() || null,
    capacidade: $("#cliente-capacidade").value.trim() || null,
    status: $("#cliente-status").value,
  };
  const { error } = await sb.from("clientes").insert(payload);
  if (error) return alert("Erro ao salvar cliente: " + error.message);
  e.target.reset();
  loadClientes();
  loadPainel();
});

window.excluirCliente = async (id) => {
  if (!confirm("Excluir este cliente?")) return;
  const { error } = await sb.from("clientes").delete().eq("id", id);
  if (error) return alert("Erro ao excluir: " + error.message);
  loadClientes();
  loadPainel();
};

/* ---------------- ESCALAS ---------------- */

async function loadEscalas() {
  const { data, error } = await sb.from("escalas").select("*").order("data", { ascending: false }).limit(50);
  if (error) return console.error(error);
  $("#tabela-escalas").innerHTML = (data || [])
    .map(
      (e) => `<tr class="border-b border-outline-variant/30 hover:bg-surface-container-low">
        <td class="py-2 px-3">${formatDate(e.data)}</td>
        <td class="py-2 px-3">${escapeHtml(e.equipe)}</td>
        <td class="py-2 px-3">${escapeHtml(e.motorista || "-")}</td>
        <td class="py-2 px-3">${escapeHtml(e.veiculo_placa || "-")}</td>
        <td class="py-2 px-3 capitalize">${escapeHtml(e.turno || "-")}</td>
        <td class="py-2 px-3">${badge(e.status)}</td>
        <td class="py-2 px-3 text-right">
          <button class="text-error text-sm" onclick="excluirEscala('${e.id}')">Excluir</button>
        </td>
      </tr>`
    )
    .join("") || `<tr><td colspan="7" class="py-6 text-center text-on-surface-variant">Nenhuma escala cadastrada ainda.</td></tr>`;
}

$("#form-escala").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    data: $("#escala-data").value,
    equipe: $("#escala-equipe").value.trim(),
    motorista: $("#escala-motorista").value.trim() || null,
    veiculo_placa: $("#escala-placa").value.trim() || null,
    turno: $("#escala-turno").value,
    rota: $("#escala-rota").value.trim() || null,
  };
  const { error } = await sb.from("escalas").insert(payload);
  if (error) return alert("Erro ao salvar escala: " + error.message);
  e.target.reset();
  loadEscalas();
  loadPainel();
});

window.excluirEscala = async (id) => {
  if (!confirm("Excluir esta escala?")) return;
  const { error } = await sb.from("escalas").delete().eq("id", id);
  if (error) return alert("Erro ao excluir: " + error.message);
  loadEscalas();
  loadPainel();
};

/* ---------------- EQUIPE / FUNCIONÁRIOS + DOCUMENTOS LGPD ---------------- */

async function loadFuncionarios() {
  const { data, error } = await sb.from("funcionarios").select("*").order("nome");
  if (error) return console.error(error);

  $("#tabela-funcionarios").innerHTML = (data || [])
    .map(
      (f) => `<tr class="border-b border-outline-variant/30 hover:bg-surface-container-low">
        <td class="py-2 px-3 font-medium">${escapeHtml(f.nome)}</td>
        <td class="py-2 px-3">${escapeHtml(f.cargo || "-")}</td>
        <td class="py-2 px-3">${escapeHtml(f.telefone || "-")}</td>
        <td class="py-2 px-3">${f.ativo ? badge("ativo") : badge("inativo")}</td>
        <td class="py-2 px-3 text-right">
          <button class="text-error text-sm" onclick="excluirFuncionario('${f.id}')">Excluir</button>
        </td>
      </tr>`
    )
    .join("") || `<tr><td colspan="5" class="py-6 text-center text-on-surface-variant">Nenhum funcionário cadastrado ainda.</td></tr>`;

  const selects = $$("#doc-funcionario");
  selects.forEach((sel) => {
    sel.innerHTML = (data || []).map((f) => `<option value="${f.id}">${escapeHtml(f.nome)}</option>`).join("");
  });

  if (currentProfile?.role === "admin" || currentProfile?.role === "supervisor") {
    loadDocumentos();
  }
}

$("#form-funcionario").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    nome: $("#func-nome").value.trim(),
    cargo: $("#func-cargo").value.trim() || null,
    telefone: $("#func-telefone").value.trim() || null,
  };
  const { error } = await sb.from("funcionarios").insert(payload);
  if (error) return alert("Erro ao salvar funcionário: " + error.message);
  e.target.reset();
  loadFuncionarios();
});

window.excluirFuncionario = async (id) => {
  if (!confirm("Excluir este funcionário? Os documentos vinculados também serão removidos.")) return;
  const { error } = await sb.from("funcionarios").delete().eq("id", id);
  if (error) return alert("Erro ao excluir: " + error.message);
  loadFuncionarios();
};

async function loadDocumentos() {
  const { data, error } = await sb
    .from("documentos_equipe")
    .select("*, funcionarios(nome)")
    .order("created_at", { ascending: false });
  if (error) return console.error(error);
  $("#tabela-documentos").innerHTML = (data || [])
    .map(
      (d) => `<tr class="border-b border-outline-variant/30 hover:bg-surface-container-low">
        <td class="py-2 px-3 font-medium">${escapeHtml(d.funcionarios?.nome || "-")}</td>
        <td class="py-2 px-3">${escapeHtml(d.tipo_documento)}</td>
        <td class="py-2 px-3">${escapeHtml(d.observacoes || "-")}</td>
        <td class="py-2 px-3 text-right">
          <button class="text-error text-sm" onclick="excluirDocumento('${d.id}')">Excluir</button>
        </td>
      </tr>`
    )
    .join("") || `<tr><td colspan="4" class="py-6 text-center text-on-surface-variant">Nenhum documento restrito cadastrado ainda.</td></tr>`;
}

$("#form-documento").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    funcionario_id: $("#doc-funcionario").value,
    tipo_documento: $("#doc-tipo").value.trim(),
    observacoes: $("#doc-obs").value.trim() || null,
  };
  const { error } = await sb.from("documentos_equipe").insert(payload);
  if (error) return alert("Erro ao salvar documento: " + error.message);
  e.target.reset();
  loadDocumentos();
});

window.excluirDocumento = async (id) => {
  if (!confirm("Excluir este documento?")) return;
  const { error } = await sb.from("documentos_equipe").delete().eq("id", id);
  if (error) return alert("Erro ao excluir: " + error.message);
  loadDocumentos();
};

/* ---------------- OCORRÊNCIAS ---------------- */

async function loadOcorrencias() {
  const { data, error } = await sb
    .from("ocorrencias")
    .select("*, clientes(nome)")
    .order("aberta_em", { ascending: false });
  if (error) return console.error(error);
  $("#tabela-ocorrencias").innerHTML = (data || [])
    .map(
      (o) => `<tr class="border-b border-outline-variant/30 hover:bg-surface-container-low">
        <td class="py-2 px-3 font-medium">${escapeHtml(o.titulo)}</td>
        <td class="py-2 px-3">${escapeHtml(o.clientes?.nome || "-")}</td>
        <td class="py-2 px-3">${badge(o.severidade)}</td>
        <td class="py-2 px-3">
          <select class="border border-outline rounded px-2 py-1 text-sm" onchange="mudarStatusOcorrencia('${o.id}', this.value)">
            ${["aberta", "em_andamento", "resolvida"]
              .map((s) => `<option value="${s}" ${s === o.status ? "selected" : ""}>${statusLabel(s)}</option>`)
              .join("")}
          </select>
        </td>
        <td class="py-2 px-3">${formatDateTime(o.aberta_em)}</td>
        <td class="py-2 px-3 text-right">
          <button class="text-error text-sm" onclick="excluirOcorrencia('${o.id}')">Excluir</button>
        </td>
      </tr>`
    )
    .join("") || `<tr><td colspan="6" class="py-6 text-center text-on-surface-variant">Nenhuma ocorrência registrada ainda.</td></tr>`;
}

$("#form-ocorrencia").addEventListener("submit", async (e) => {
  e.preventDefault();
  const clienteId = $("#ocorrencia-cliente").value || null;
  const payload = {
    titulo: $("#ocorrencia-titulo").value.trim(),
    descricao: $("#ocorrencia-descricao").value.trim() || null,
    cliente_id: clienteId,
    severidade: $("#ocorrencia-severidade").value,
  };
  const { error } = await sb.from("ocorrencias").insert(payload);
  if (error) return alert("Erro ao salvar ocorrência: " + error.message);
  e.target.reset();
  loadOcorrencias();
  loadPainel();
});

window.mudarStatusOcorrencia = async (id, status) => {
  const payload = { status };
  if (status === "resolvida") payload.resolvida_em = new Date().toISOString();
  const { error } = await sb.from("ocorrencias").update(payload).eq("id", id);
  if (error) return alert("Erro ao atualizar: " + error.message);
  loadOcorrencias();
  loadPainel();
};

window.excluirOcorrencia = async (id) => {
  if (!confirm("Excluir esta ocorrência?")) return;
  const { error } = await sb.from("ocorrencias").delete().eq("id", id);
  if (error) return alert("Erro ao excluir: " + error.message);
  loadOcorrencias();
  loadPainel();
};

// Popula o select de clientes no form de ocorrência sempre que clientes mudam
const _origLoadClientes = loadClientes;
loadClientes = async function () {
  await _origLoadClientes();
  const { data } = await sb.from("clientes").select("id, nome").order("nome");
  const sel = $("#ocorrencia-cliente");
  if (sel) sel.innerHTML = `<option value="">— Nenhum —</option>` + (data || []).map((c) => `<option value="${c.id}">${escapeHtml(c.nome)}</option>`).join("");
};

/* ---------------- HELPERS ---------------- */

function escapeHtml(str) {
  if (str == null) return "";
  return String(str).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function formatDate(d) {
  if (!d) return "-";
  return new Date(d + "T00:00:00").toLocaleDateString("pt-BR");
}

function formatDateTime(d) {
  if (!d) return "-";
  return new Date(d).toLocaleString("pt-BR");
}

function statusLabel(s) {
  return { aberta: "Aberta", em_andamento: "Em andamento", resolvida: "Resolvida", ativo: "Ativo", inativo: "Inativo", prioridade: "Prioridade", planejada: "Planejada", concluida: "Concluída", cancelada: "Cancelada" }[s] || s;
}

function badge(status) {
  const map = {
    ativo: "bg-emerald-100 text-emerald-800",
    prioridade: "bg-red-100 text-red-800",
    inativo: "bg-slate-100 text-slate-600",
    aberta: "bg-red-100 text-red-800",
    em_andamento: "bg-amber-100 text-amber-800",
    resolvida: "bg-emerald-100 text-emerald-800",
    planejada: "bg-slate-100 text-slate-600",
    concluida: "bg-emerald-100 text-emerald-800",
    cancelada: "bg-slate-100 text-slate-600",
    baixa: "bg-slate-100 text-slate-600",
    media: "bg-amber-100 text-amber-800",
    alta: "bg-orange-100 text-orange-800",
    critica: "bg-red-100 text-red-800",
  };
  const cls = map[status] || "bg-slate-100 text-slate-600";
  return `<span class="px-2 py-0.5 rounded-full text-xs font-semibold ${cls}">${statusLabel(status)}</span>`;
}

initAuth();
