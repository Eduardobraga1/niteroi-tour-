import { Button } from "@/components/ui/button";
import { Plane, SunMedium, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50 to-slate-50">
      <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-20 lg:py-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
            <SunMedium className="h-3.5 w-3.5 text-amber-400" />
            <span>Experiências completas saindo de Niterói e região</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Niteroi Tour: viagens sob medida para{" "}
              <span className="text-brand">momentos inesquecíveis</span>.
            </h1>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              A Niteroi Tour cuida de todos os detalhes: passagens, hospedagem,
              traslados e passeios, com saídas de Niterói e cidades vizinhas
              para destinos nacionais e internacionais.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" className="gap-2 rounded-full">
              <Plane className="h-4 w-4" />
              Montar meu roteiro
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Falar com consultor
            </Button>
          </div>

          <dl className="grid gap-4 text-xs text-slate-600 sm:grid-cols-3 sm:text-sm">
            <div>
              <dt className="font-semibold text-slate-900">+10 anos</dt>
              <dd>De experiência no mercado de turismo.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Suporte 24/7</dt>
              <dd>Acompanhamento antes, durante e após a viagem.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Atendimento humano</dt>
              <dd>Consultores especialistas em cada destino.</dd>
            </div>
          </dl>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-[url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')] bg-cover bg-center shadow-xl ring-4 ring-white/80" />
            <div className="absolute -bottom-4 -left-3 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-xs shadow-lg ring-1 ring-slate-200">
              <MapPin className="h-4 w-4 text-brand" />
              <div>
                <p className="font-semibold text-slate-900">Saídas de Niterói</p>
                <p className="text-[11px] text-slate-600">
                  Embarques no Rio, Niterói e região metropolitana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
