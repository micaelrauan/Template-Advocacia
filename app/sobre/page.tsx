import Image from "next/image";
import Link from "next/link";
import { FiAward, FiTarget, FiHeart, FiShield } from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós - Cavalcanti & Associados",
  description:
    "Conheça a história, missão e valores do escritório Cavalcanti & Associados. Mais de 20 anos de experiência em advocacia de excelência em Fortaleza, CE.",
};

export default function Sobre() {
  const values = [
    {
      icon: <FiAward size={40} />,
      title: "Excelência",
      description:
        "Buscamos constantemente a excelência técnica e o aprimoramento profissional para oferecer o melhor serviço jurídico.",
    },
    {
      icon: <FiTarget size={40} />,
      title: "Foco em Resultados",
      description:
        "Nosso compromisso é entregar soluções efetivas e estratégicas que atendam aos objetivos de nossos clientes.",
    },
    {
      icon: <FiHeart size={40} />,
      title: "Atendimento Humanizado",
      description:
        "Valorizamos o relacionamento próximo com nossos clientes, oferecendo atendimento personalizado e empático.",
    },
    {
      icon: <FiShield size={40} />,
      title: "Ética e Transparência",
      description:
        "Atuamos com integridade, transparência e respeito aos mais elevados padrões éticos da advocacia.",
    },
  ];

  const team = [
    {
      name: "Dr. Roberto Cavalcanti",
      role: "Sócio Fundador",
      specialization: "Direito Empresarial e Civil",
      description:
        "OAB/CE 12.345 - Mais de 25 anos de experiência, especialista em Direito Empresarial pela FGV.",
    },
    {
      name: "Dra. Fernanda Almeida",
      role: "Sócia",
      specialization: "Direito Trabalhista",
      description:
        "OAB/CE 23.456 - Mestre em Direito do Trabalho pela UFC, com atuação em grandes corporações.",
    },
    {
      name: "Dr. Marcos Vieira",
      role: "Advogado Associado",
      specialization: "Direito Penal",
      description:
        "OAB/CE 34.567 - Especialista em Ciências Criminais, com vasta experiência em defesa criminal.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
            alt="Sobre o Escritório"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/85"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Sobre Nós
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Tradição, confiança e excelência em advocacia há mais de 20 anos
          </p>
        </div>
      </section>

      {/* História Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069"
                alt="Nossa História"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title">Nossa História</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Fundado em 2004 pelo Dr. Roberto Cavalcanti, o escritório nasceu
                com o propósito de oferecer assessoria jurídica diferenciada,
                pautada na ética, excelência técnica e compromisso com
                resultados.
              </p>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Ao longo de mais de duas décadas, construímos uma trajetória
                sólida de conquistas e reconhecimento no cenário jurídico
                cearense. Nossa equipe cresceu, mas mantivemos intactos os
                valores que nos trouxeram até aqui: dedicação, seriedade e
                respeito aos nossos clientes.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Hoje, o <strong>Cavalcanti & Associados</strong> é referência em
                diversas áreas do Direito, atendendo desde pessoas físicas até
                grandes corporações, sempre com a mesma excelência e
                comprometimento que nos definem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Missão, Visão e Valores</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                Missão
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Oferecer soluções jurídicas estratégicas e personalizadas,
                protegendo os direitos e interesses de nossos clientes com
                ética, excelência e comprometimento.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                Visão
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Ser reconhecido como o escritório de advocacia de referência no
                Ceará, pela qualidade de nossos serviços, pela satisfação de
                nossos clientes e pela excelência de nossa equipe.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                Princípios
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Pautamos nossa atuação em princípios éticos sólidos,
                transparência nas relações, respeito aos clientes e dedicação
                incansável à busca da justiça.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 text-secondary mb-4">
                  {value.icon}
                </div>
                <h4 className="font-serif text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nossa Equipe</h2>
            <p className="section-subtitle">
              Profissionais experientes e dedicados ao seu sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6"></div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                  {member.name}
                </h3>
                <div className="text-secondary font-medium mb-2">
                  {member.role}
                </div>
                <div className="text-sm text-neutral-600 mb-3 font-medium">
                  {member.specialization}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Agende uma consulta e descubra como podemos ajudar você ou sua
            empresa
          </p>
          <Link
            href="/contato"
            className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-4"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </>
  );
}
