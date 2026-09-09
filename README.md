# Painel Operacional Logístico — Logística360

Design system e telas (export do Stitch) para o painel operacional de logística
(gestão de frota, granel e cilindros).

## Estrutura

```
painel-operacional-logistico/
├── DESIGN.md                     # Design system: cores, tipografia, espaçamento, componentes
├── assets/
│   └── manager-headshot.png      # Imagem de exemplo (foto ilustrativa de gestor)
├── logo/
│   └── code.html                 # Logo Logística360
├── dashboard/
│   └── code.html                 # Painel Operacional (visão geral)
├── clientes-granel-cilindro/
│   └── code.html                 # Gestão de Clientes (Granel e Cilindro)
├── equipe-documentos-lgpd/
│   └── code.html                 # Equipe e Documentos Restritos (LGPD)
├── escala-equipes-veiculos/
│   └── code.html                 # Escala Diária e Sábados (equipes e veículos)
└── central-ocorrencias/
    └── code.html                 # Central de Ocorrências Operacionais
```

Cada pasta de tela também tem um `screen.png` com o preview visual gerado pelo Stitch
(apenas referência — não faz parte do código).

## Como subir para o GitHub na pasta `gabriel`

1. Baixe e extraia este zip.
2. No seu repositório local (ou recém-clonado), crie/entre na pasta `gabriel`:
   ```bash
   mkdir -p gabriel
   cp -r painel-operacional-logistico gabriel/
   ```
3. Adicione, faça commit e push:
   ```bash
   git add gabriel/painel-operacional-logistico
   git commit -m "Adiciona design do Painel Operacional Logístico (Logística360)"
   git push
   ```

Se preferir, também posso ajudar a transformar essas telas HTML estáticas em um
app funcional (React, com dados reais) antes de você subir a versão final.
