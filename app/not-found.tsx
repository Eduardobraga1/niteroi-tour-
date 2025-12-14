export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">404 - Página não encontrada</h2>
        <p className="mt-2 text-slate-600">
          A página que você procura não existe.
        </p>
        <a
          href="/"
          className="mt-4 inline-block rounded-full bg-brand px-4 py-2 text-white hover:bg-brand-dark"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
}

