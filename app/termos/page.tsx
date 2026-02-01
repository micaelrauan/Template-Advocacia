import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso - Cavalcanti & Associados",
  description: "Termos de Uso do site do escritório Cavalcanti & Associados",
};

export default function Termos() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
          Termos de Uso
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-neutral-600 mb-6">
            <strong>Última atualização:</strong> Fevereiro de 2026
          </p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Ao acessar e utilizar este site, você concorda com os termos e
              condições descritos neste documento. Se você não concorda com
              estes termos, não utilize este site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              2. Uso do Site
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Este site é fornecido apenas para fins informativos. O conteúdo
              não constitui aconselhamento jurídico e não deve ser usado como
              substituto de consulta com um advogado qualificado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              3. Propriedade Intelectual
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Todo o conteúdo deste site, incluindo textos, gráficos, logos,
              imagens e software, é propriedade do{" "}
              <strong>Cavalcanti & Associados</strong> ou de seus licenciadores
              e está protegido por leis de direitos autorais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              4. Limitação de Responsabilidade
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              O escritório não se responsabiliza por quaisquer danos diretos,
              indiretos, incidentais ou consequenciais resultantes do uso ou da
              impossibilidade de uso deste site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              5. Links Externos
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Este site pode conter links para sites de terceiros. Não nos
              responsabilizamos pelo conteúdo ou práticas de privacidade desses
              sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              6. Modificações
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer
              momento. As alterações entrarão em vigor imediatamente após sua
              publicação no site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              7. Lei Aplicável
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Estes termos são regidos pelas leis da República Federativa do
              Brasil. Qualquer disputa será submetida ao foro da Comarca de
              Fortaleza, Estado do Ceará.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              8. Contato
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Para dúvidas sobre estes termos, entre em contato:
            </p>
            <p className="text-neutral-600 mt-3">
              <strong>E-mail:</strong> contato@cavalcantiadvocacia.com.br
              <br />
              <strong>Telefone:</strong> (85) 3223-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
