import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Praias do Nordeste",
    description:
      "Jericoacoara, Maragogi, Porto de Galinhas, Fernando de Noronha e mais, com saídas de Niterói e região.",
    tag: "Sol & Praia",
    image:
      "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg"
  },
  {
    name: "Europa clássica",
    description:
      "Londres, Paris, Roma e Barcelona em roteiros completos com guias em português.",
    tag: "Cultura & História",
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
  },
  {
    name: "Experiências na neve",
    description:
      "Bariloche, Ushuaia, Valle Nevado e destinos nos Alpes com estações de esqui.",
    tag: "Neve & Aventura",
    image:
      "https://images.pexels.com/photos/2259810/pexels-photo-2259810.jpeg"
  }
];

export function Destinations() {
  return (
    <section id="destinos" className="border-b border-slate-200 bg-slate-50">
      <div className="container space-y-8 py-14 sm:py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Destinos mais procurados
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            Trabalhamos com os melhores fornecedores para garantir segurança,
            conforto e experiências únicas em cada destino.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map((destination) => (
            <Card key={destination.name} className="overflow-hidden p-0">
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              <CardContent className="space-y-3 p-5">
                <div className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                  <MapPin className="h-3 w-3 text-brand" />
                  <span>{destination.tag}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {destination.name}
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm">
                  {destination.description}
                </p>
                <p className="text-xs font-medium text-brand">
                  A partir de 5x sem juros – consulte condições
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
