"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio (em produção, integrar com API)
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset status após 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Contato"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/85"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Estamos prontos para ajudar você. Agende sua consulta
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                <FiMapPin size={32} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Endereço
              </h3>
              <p className="text-neutral-600">
                Av. Santos Dumont, 2828
                <br />
                Aldeota, Fortaleza - CE
                <br />
                CEP: 60150-161
              </p>
            </div>

            <div className="card text-center hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                <FiPhone size={32} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                Telefone
              </h3>
              <p className="text-neutral-600">
                <a
                  href="tel:+558532234567"
                  className="hover:text-secondary transition-colors"
                >
                  (85) 3223-4567
                </a>
                <br />
                <a
                  href="tel:+5585998765432"
                  className="hover:text-secondary transition-colors"
                >
                  (85) 99876-5432
                </a>
              </p>
            </div>

            <div className="card text-center hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                <FiMail size={32} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                E-mail
              </h3>
              <p className="text-neutral-600">
                <a
                  href="mailto:contato@cavalcantiadvocacia.com.br"
                  className="hover:text-secondary transition-colors"
                >
                  contato@cavalcantiadvocacia.com.br
                </a>
                <br />
                <a
                  href="mailto:atendimento@cavalcantiadvocacia.com.br"
                  className="hover:text-secondary transition-colors"
                >
                  atendimento@cavalcantiadvocacia.com.br
                </a>
              </p>
            </div>
          </div>

          {/* Horário de Atendimento */}
          <div className="card max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary flex-shrink-0">
                <FiClock size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  Horário de Atendimento
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-neutral-600">
                  <div>
                    <p className="font-medium">Segunda a Quinta</p>
                    <p>08:00 - 18:00</p>
                  </div>
                  <div>
                    <p className="font-medium">Sexta-feira</p>
                    <p>08:00 - 17:00</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 mt-3">
                  * Atendimentos fora do horário comercial podem ser agendados
                  previamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Envie sua Mensagem</h2>
              <p className="section-subtitle">
                Preencha o formulário abaixo e nossa equipe entrará em contato
                em breve
              </p>
            </div>

            <div className="card">
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 text-center font-medium">
                    ✓ Mensagem enviada com sucesso! Entraremos em contato em
                    breve.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 text-center font-medium">
                    ✗ Erro ao enviar mensagem. Por favor, tente novamente.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="(85) 99999-9999"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    >
                      <option value="">Selecione...</option>
                      <option value="civil">Direito Civil</option>
                      <option value="empresarial">Direito Empresarial</option>
                      <option value="trabalhista">Direito Trabalhista</option>
                      <option value="penal">Direito Penal</option>
                      <option value="previdenciario">
                        Direito Previdenciário
                      </option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                    placeholder="Descreva brevemente sua necessidade jurídica..."
                  ></textarea>
                </div>

                <div className="text-sm text-neutral-600">
                  <p>* Campos obrigatórios</p>
                  <p className="mt-2">
                    Ao enviar este formulário, você concorda com nossa{" "}
                    <a
                      href="/privacidade"
                      className="text-secondary hover:underline"
                    >
                      Política de Privacidade
                    </a>
                    .
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="h-[500px] bg-neutral-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2345678901234!2d-38.5267!3d-3.7392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDQnMjEuMSJTIDM4wrAzMSczNi4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do escritório"
        ></iframe>
      </section>
    </>
  );
}
