import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Landmark, Waves } from "lucide-react";

const tours = [
  {
    icon: Landmark,
    title: "City Tour Histórico",
    description:
      "Caminhada guiada pelo Centro de Niterói, Campo de São Bento e Museu de Arte Contemporânea (MAC).",
    info: "Duração média: 4h • Saídas pela manhã e tarde."
  },
  {
    icon: Waves,
    title: "Praias da Região Oceânica",
    description:
      "Transporte e day use em Itacoatiara, Camboinhas e Piratininga, com paradas para fotos e mirantes.",
    info: "Roteiro ideal para finais de semana e feriados."
  },
  {
    icon: MapPin,
    title: "Pôr do Sol em Niterói",
    description:
      "Tour panorâmico passando pela orla, MAC e Parque da Cidade para apreciar o pôr do sol com vista para o Rio.",
    info: "Opção de traslado saindo de hotéis em Niterói."
  }
];

export function NiteroiTours() {
  return (
    <section id="niteroi" className="border-b border-slate-200 bg-white">
      <div className="container space-y-8 py-14 sm:py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Passeios em Niterói
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            Explore o melhor de Niterói com roteiros pensados para moradores e visitantes:
            pontos históricos, natureza e vistas incríveis para a Baía de Guanabara.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tours.map((tour) => (
            <Card key={tour.title}>
              <CardHeader>
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-brand-dark">
                  <tour.icon className="h-4 w-4" />
                </div>
                <CardTitle>{tour.title}</CardTitle>
                <CardDescription>{tour.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600 sm:text-sm">{tour.info}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
