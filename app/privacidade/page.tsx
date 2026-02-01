import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - Cavalcanti & Associados",
  description: "Política de Privacidade do escritório Cavalcanti & Associados",
};

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-neutral-600 mb-6">
            <strong>Última atualização:</strong> Fevereiro de 2026
          </p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              1. Introdução
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              O escritório <strong>Cavalcanti & Associados</strong> está
              comprometido com a proteção da privacidade e dos dados pessoais de
              seus clientes e visitantes. Esta Política de Privacidade descreve
              como coletamos, usamos, armazenamos e protegemos suas informações
              pessoais, em conformidade com a Lei Geral de Proteção de Dados
              (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              2. Informações que Coletamos
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-3">
              Podemos coletar as seguintes informações:
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Informações sobre sua consulta ou caso jurídico</li>
              <li>Dados de navegação no site (cookies, IP, etc.)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              3. Como Usamos suas Informações
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-3">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              <li>Responder às suas consultas e solicitações</li>
              <li>Prestar serviços jurídicos</li>
              <li>Enviar comunicações relevantes sobre nossos serviços</li>
              <li>Melhorar a experiência de navegação em nosso site</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              4. Compartilhamento de Informações
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais
              com terceiros, exceto quando necessário para a prestação de nossos
              serviços ou quando exigido por lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              5. Segurança de Dados
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para
              proteger suas informações contra acesso não autorizado, perda,
              destruição ou alteração.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              6. Seus Direitos
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-3">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Revogar o consentimento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              7. Contato
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta
              política, entre em contato:
            </p>
            <p className="text-neutral-600 mt-3">
              <strong>E-mail:</strong> privacidade@cavalcantiadvocacia.com.br
              <br />
              <strong>Telefone:</strong> (85) 3223-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
