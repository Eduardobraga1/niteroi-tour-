"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Algo deu errado!</h2>
        <button
          onClick={() => reset()}
          className="mt-4 rounded-full bg-brand px-4 py-2 text-white hover:bg-brand-dark"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
