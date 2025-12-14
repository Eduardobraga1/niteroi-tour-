import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarHeart, Compass, HandHeart } from "lucide-react";

const items = [
  {
    icon: Compass,
    title: "Roteiros personalizados",
    description:
      "Montamos o seu roteiro saindo de Niterói, com base no seu perfil, tempo disponível e orçamento.",
    cta: "Ver roteiros prontos"
  },
  {
    icon: CalendarHeart,
    title: "Datas flexíveis",
    description:
      "Opções para feriados, férias escolares, lua de mel e escapadas de fim de semana com embarque no Rio e Niterói.",
    cta: "Conferir promoções"
  },
  {
    icon: HandHeart,
    title: "Atendimento dedicado",
    description:
      "Um consultor acompanha sua viagem do planejamento ao pós-viagem.",
    cta: "Agendar conversa"
  }
];

export function Highlights() {
  return (
    <section id="pacotes" className="border-b border-slate-200 bg-white">
      <div className="container space-y-8 py-14 sm:py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Tudo o que você precisa para viajar em paz
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            Cuidamos de cada detalhe da sua viagem para que você se preocupe
            apenas em aproveitar o momento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-brand-dark">
                  <item.icon className="h-4 w-4" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="px-0 text-sm font-semibold text-brand hover:bg-transparent hover:text-brand-dark">
                  {item.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
