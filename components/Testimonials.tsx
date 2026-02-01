"use client";

import { useState } from "react";
import { FiStar } from "react-icons/fi";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo Mendes",
      role: "Empresário",
      company: "Mendes Importadora Ltda.",
      text: "O escritório Cavalcanti & Associados foi fundamental na reestruturação jurídica da minha empresa. Profissionalismo impecável e resultados acima das expectativas.",
      rating: 5,
    },
    {
      name: "Ana Paula Ferreira",
      role: "Arquiteta",
      company: "Studio Ferreira Arquitetura",
      text: "Excelente atendimento! Resolveram minha questão contratual com muita competência e agilidade. Recomendo fortemente.",
      rating: 5,
    },
    {
      name: "Ricardo Alves Santos",
      role: "Médico",
      company: "Clínica Santos & Associados",
      text: "Assessoria jurídica de altíssimo nível. A equipe demonstrou profundo conhecimento técnico e grande comprometimento com meu caso.",
      rating: 5,
    },
    {
      name: "Mariana Costa Lima",
      role: "Diretora Comercial",
      company: "TechNova Solutions",
      text: "Trabalho excepcional! O Dr. Cavalcanti e sua equipe conduziram nossa negociação comercial com maestria. Conquistamos um acordo muito favorável.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">O que Nossos Clientes Dizem</h2>
          <p className="section-subtitle">
            A confiança de nossos clientes é nosso maior patrimônio
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="text-secondary fill-secondary"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-neutral-700 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-neutral-200 pt-4">
                <div className="font-semibold text-primary">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral-600">
                  {testimonial.role}
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="card">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FiStar
                  key={i}
                  className="text-secondary fill-secondary"
                  size={20}
                />
              ))}
            </div>
            <p className="text-neutral-700 italic mb-6 leading-relaxed">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>
            <div className="border-t border-neutral-200 pt-4">
              <div className="font-semibold text-primary">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-sm text-neutral-600">
                {testimonials[currentIndex].role}
              </div>
              <div className="text-xs text-neutral-500 mt-1">
                {testimonials[currentIndex].company}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-secondary w-8" : "bg-neutral-300"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
