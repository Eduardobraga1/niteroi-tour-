import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-slate-50">
            NT
          </span>
          <span className="text-base font-semibold tracking-tight">
            Niteroi Tour
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="#pacotes" className="hover:text-brand">
            Pacotes
          </Link>
          <Link href="#niteroi" className="hover:text-brand">
            Niterói
          </Link>
          <Link href="#destinos" className="hover:text-brand">
            Destinos
          </Link>
          <Link href="#sobre" className="hover:text-brand">
            Sobre
          </Link>
          <Link href="#contato" className="hover:text-brand">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Entrar
          </Button>
          <Button size="sm" className="rounded-full">
            Orçar viagem
          </Button>
        </div>
      </div>
    </header>
  );
}
