"use client";

import { Button } from "@/components/ui/button";
import { Plane, SunMedium, MapPin } from "lucide-react";

const whatsappNumber = "5521994179187";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de montar um roteiro personalizado.")}`;
const whatsappUrlConsultor = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de falar com um consultor.")}`;

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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand px-8 text-sm font-medium text-white shadow transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Plane className="h-4 w-4" />
              Montar meu roteiro
            </a>
            <a
              href={whatsappUrlConsultor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-8 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              Falar com consultor
            </a>
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
