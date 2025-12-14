import { Button } from "@/components/ui/button";
import { siteContacts } from "@/config/site";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="border-b border-slate-200 bg-white"
    >
      <div className="container grid gap-10 py-14 sm:py-16 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Pronto para planejar a próxima viagem?
          </h2>
          <p className="max-w-xl text-sm text-slate-600 sm:text-base">
            Preencha os dados ao lado ou fale com um de nossos consultores para
            receber um orçamento sem compromisso em até 24 horas úteis.
          </p>
          <p className="max-w-xl text-xs text-slate-600">
            Sou <span className="font-medium text-slate-900">Leo Monteiro</span>,
            consultor de viagens da Niteroi Tour. Vou te ajudar a encontrar o
            melhor roteiro saindo de Niterói e região, de acordo com o seu
            perfil e orçamento.
          </p>

          <div className="rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-600">
            {siteContacts.whatsapp || siteContacts.email ? (
              <div className="space-y-1">
                {siteContacts.whatsapp && (
                  <p>
                    <span className="font-semibold text-slate-800">
                      WhatsApp:
                    </span>{" "}
                    {siteContacts.whatsapp}
                  </p>
                )}
                {siteContacts.email && (
                  <p>
                    <span className="font-semibold text-slate-800">
                      E-mail:
                    </span>{" "}
                    {siteContacts.email}
                  </p>
                )}
                <p className="pt-1 text-[11px] text-slate-500">
                  Atendimento:{" "}
                  <span className="font-medium text-slate-800">
                    Leo Monteiro
                  </span>
                </p>
              </div>
            ) : (
              <p>
                Quando o site estiver pronto, inclua o{" "}
                <span className="font-semibold text-slate-800">
                  WhatsApp comercial
                </span>{" "}
                e o{" "}
                <span className="font-semibold text-slate-800">
                  e-mail de atendimento
                </span>{" "}
                no arquivo <code>config/site.ts</code> para que apareçam aqui.
              </p>
            )}
          </div>

          <ul
            id="sobre"
            className="mt-4 space-y-2 text-sm text-slate-600"
          >
            <li>✓ Atendimento humanizado e sem robôs.</li>
            <li>✓ Condições especiais para grupos, empresas e lua de mel.</li>
            <li>✓ Parcelamento facilitado no cartão ou boleto.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
          <form className="space-y-4 text-sm">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                Nome completo
              </label>
              <input
                type="text"
                required
                className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-brand/60 placeholder:text-slate-400 focus:border-brand focus:ring-2"
                placeholder="Como você prefere ser chamado(a)?"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-brand/60 placeholder:text-slate-400 focus:border-brand focus:ring-2"
                  placeholder="seuemail@exemplo.com"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-brand/60 placeholder:text-slate-400 focus:border-brand focus:ring-2"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Destino de interesse
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-brand/60 placeholder:text-slate-400 focus:border-brand focus:ring-2"
                  placeholder="Ex: Nordeste, Europa, Caribe..."
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Período / Mês desejado
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-brand/60 placeholder:text-slate-400 focus:border-brand focus:ring-2"
                  placeholder="Ex: Julho, Réveillon..."
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                Conte um pouco mais sobre a viagem
              </label>
              <textarea
                className="block min-h-[90px] w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-brand/60 placeholder:text-slate-400 focus:border-brand focus:ring-2"
                placeholder="Número de pessoas, tipo de experiência desejada, orçamento estimado..."
              />
            </div>

            <Button type="submit" className="w-full justify-center rounded-full">
              Receber orçamento
            </Button>

            <p className="text-[11px] text-slate-500">
              Ao enviar, você concorda em receber contato da nossa equipe por
              e-mail ou WhatsApp. Não enviamos spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
