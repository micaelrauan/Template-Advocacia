import Image from "next/image";
import Link from "next/link";
import {
  FiHome,
  FiBriefcase,
  FiUsers,
  FiShield,
  FiTrendingUp,
  FiFileText,
} from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Áreas de Atuação - Cavalcanti & Associados",
  description:
    "Conheça as áreas de atuação do escritório Cavalcanti & Associados: Direito Civil, Empresarial, Trabalhista, Penal e Previdenciário.",
};

export default function AreasAtuacao() {
  const practiceAreas = [
    {
      icon: <FiHome size={50} />,
      title: "Direito Civil",
      description:
        "Assessoria jurídica completa em questões civis, incluindo contratos, responsabilidade civil, direito de família, sucessões, imóveis e propriedade.",
      services: [
        "Elaboração e revisão de contratos",
        "Ações de família (divórcio, partilha, pensão)",
        "Inventário e planejamento sucessório",
        "Direito imobiliário e locações",
        "Indenizações e responsabilidade civil",
        "Usucapião e regularização fundiária",
      ],
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    },
    {
      icon: <FiBriefcase size={50} />,
      title: "Direito Empresarial",
      description:
        "Consultoria estratégica para empresas de todos os portes, desde a constituição até operações complexas e reestruturações societárias.",
      services: [
        "Constituição e registro de empresas",
        "Contratos comerciais e societários",
        "Fusões, aquisições e reorganizações",
        "Recuperação judicial e extrajudicial",
        "Compliance e governança corporativa",
        "Assessoria em negociações empresariais",
      ],
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071",
    },
    {
      icon: <FiUsers size={50} />,
      title: "Direito Trabalhista",
      description:
        "Atuação preventiva e contenciosa nas relações de trabalho, tanto na defesa de empresas quanto de colaboradores.",
      services: [
        "Consultoria preventiva trabalhista",
        "Defesa em reclamatórias trabalhistas",
        "Elaboração de contratos de trabalho",
        "Negociações coletivas e sindicais",
        "Compliance trabalhista",
        "Assessoria em demissões e rescisões",
      ],
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
    },
    {
      icon: <FiShield size={50} />,
      title: "Direito Penal",
      description:
        "Defesa criminal estratégica em todas as fases processuais, com atuação técnica e comprometida na proteção dos direitos do cliente.",
      services: [
        "Defesa em inquéritos policiais",
        "Atuação em processos criminais",
        "Habeas corpus e medidas cautelares",
        "Recursos em todas as instâncias",
        "Compliance criminal empresarial",
        "Assessoria preventiva penal",
      ],
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
    },
    {
      icon: <FiTrendingUp size={50} />,
      title: "Direito Previdenciário",
      description:
        "Assessoria completa em questões previdenciárias, garantindo o acesso aos benefícios e direitos previdenciários.",
      services: [
        "Aposentadorias (idade, tempo, invalidez)",
        "Pensão por morte",
        "Auxílio-doença e auxílio-acidente",
        "Revisão de benefícios",
        "Planejamento previdenciário",
        "Recursos administrativos e judiciais",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    },
    {
      icon: <FiFileText size={50} />,
      title: "Direito Contratual",
      description:
        "Elaboração, análise e negociação de contratos diversos, garantindo segurança jurídica nas relações contratuais.",
      services: [
        "Elaboração de contratos sob medida",
        "Análise e revisão contratual",
        "Negociação de cláusulas",
        "Contratos internacionais",
        "Resolução de conflitos contratuais",
        "Due diligence contratual",
      ],
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
            alt="Áreas de Atuação"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/85"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Áreas de Atuação
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Expertise especializada para atender todas as suas necessidades
            jurídicas
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <p className="text-lg text-neutral-600 leading-relaxed">
            O escritório <strong>Cavalcanti & Associados</strong> atua em
            diversas áreas do Direito, oferecendo assessoria jurídica completa e
            especializada. Nossa equipe multidisciplinar está preparada para
            atender desde demandas individuais até operações empresariais
            complexas, sempre com excelência técnica e foco em resultados.
          </p>
        </div>
      </section>

      {/* Áreas Detalhadas */}
      {practiceAreas.map((area, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? "bg-neutral-50" : "bg-white"}`}
        >
          <div className="container-custom">
            <div
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 text-secondary mb-6">
                  {area.icon}
                </div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-4">
                  {area.title}
                </h2>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <h3 className="font-semibold text-lg text-primary mb-3">
                  Serviços incluem:
                </h3>
                <ul className="space-y-2">
                  {area.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span className="text-neutral-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                  index % 2 === 0 ? "order-2" : "order-2 md:order-1"
                }`}
              >
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Por que escolher Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Por que Escolher Nosso Escritório?
            </h2>
            <p className="text-xl text-neutral-100 max-w-3xl mx-auto">
              Diferenciais que nos tornam referência em advocacia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">20+</div>
              <div className="text-neutral-200">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <div className="text-neutral-200">Casos de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">98%</div>
              <div className="text-neutral-200">Satisfação dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">15+</div>
              <div className="text-neutral-200">Advogados Especialistas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Precisa de Assessoria Jurídica?
          </h2>
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
            Entre em contato e agende uma consulta. Nossa equipe está pronta
            para oferecer a melhor solução para o seu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="btn-primary text-lg px-10 py-4">
              Agendar Consulta
            </Link>
            <Link href="/sobre" className="btn-secondary text-lg px-10 py-4">
              Conheça Nossa Equipe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
