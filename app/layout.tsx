import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Logística360 | Painel Operacional',
  description: 'Sistema de despacho e monitoramento logístico.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-slate-900 font-sans antialiased" suppressHydrationWarning>
        <Sidebar />
        <div className="pl-64">
          <Header />
          <main className="w-full pt-16 min-h-screen px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
