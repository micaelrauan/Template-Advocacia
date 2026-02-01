import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiAward,
  FiUsers,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const practiceAreas = [
    {
      icon: <FiShield size={40} />,
      title: "Direito Civil",
      description:
        "Contratos, responsabilidade civil, família e sucessões. Assessoria completa para proteger seus direitos e interesses.",
    },
    {
      icon: <FiTrendingUp size={40} />,
      title: "Direito Empresarial",
      description:
        "Consultoria jurídica estratégica para empresas, contratos comerciais, recuperação judicial e direito societário.",
    },
    {
      icon: <FiUsers size={40} />,
      title: "Direito Trabalhista",
      description:
        "Defesa em ações trabalhistas, consultoria preventiva e negociações coletivas para empresas e colaboradores.",
    },
    {
      icon: <FiAward size={40} />,
      title: "Direito Penal",
      description:
        "Defesa criminal estratégica, com atuação em todas as fases processuais e assessoria preventiva.",
    },
  ];

  const stats = [
    { number: "20+", label: "Anos de Experiência" },
    { number: "500+", label: "Casos de Sucesso" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "15+", label: "Advogados Especialistas" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image com Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070"
            alt="Escritório de Advocacia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Excelência em
            <span className="block text-secondary mt-2">Advocacia</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-neutral-100 font-light">
            Soluções jurídicas estratégicas e personalizadas para proteger seus
            direitos e impulsionar seus negócios em Fortaleza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link href="/contato" className="btn-primary text-lg px-10 py-4">
              Fale com um Advogado
            </Link>
            <Link
              href="/areas-atuacao"
              className="btn-secondary text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              Nossas Especialidades
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 -mt-20 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-xl shadow-2xl p-8 md:p-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Compromisso com a Excelência</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Há mais de duas décadas, o escritório{" "}
                <strong>Cavalcanti & Associados</strong> tem se destacado no
                cenário jurídico de Fortaleza e do Ceará, oferecendo assessoria
                jurídica de alta qualidade com foco em resultados efetivos.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Nossa equipe de advogados especializados combina expertise
                técnica, visão estratégica e atendimento humanizado para
                garantir a melhor solução para cada caso.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group"
              >
                Conheça Nossa História
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                alt="Equipe de Advogados"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Áreas de Atuação</h2>
            <p className="section-subtitle">
              Expertise especializada para atender todas as suas necessidades
              jurídicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="card group hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  {area.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/areas-atuacao" className="btn-primary">
              Ver Todas as Áreas
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Precisa de Assessoria Jurídica?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-neutral-100">
            Entre em contato conosco e agende uma consulta. Nossa equipe está
            pronta para oferecer a melhor solução para o seu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-secondary hover:bg-secondary-dark text-white font-medium px-10 py-4 rounded-md transition-all duration-300 text-lg"
            >
              Agendar Consulta
            </Link>
            <Link
              href="tel:+558532234567"
              className="bg-white hover:bg-neutral-100 text-primary font-medium px-10 py-4 rounded-md transition-all duration-300 text-lg"
            >
              (85) 3223-4567
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
