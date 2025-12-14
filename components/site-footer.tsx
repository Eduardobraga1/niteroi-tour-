export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} Niteroi Tour. Todos os direitos
            reservados.
          </p>
          <p className="text-[11px] text-slate-600">
            Atendimento:{" "}
            <span className="font-medium text-slate-800">Leo Monteiro</span>
          </p>
        </div>
        <p className="space-x-2">
          <span>CNPJ 00.000.000/0001-00</span>
          <span className="hidden sm:inline">•</span>
          <span>Cadastur 00.000000.00.00-0</span>
        </p>
      </div>
    </footer>
  );
}
