import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sobre */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-secondary">
              Cavalcanti & Associados
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              Escritório de advocacia premium com mais de 20 anos de
              experiência, oferecendo soluções jurídicas estratégicas e
              personalizadas.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-secondary">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  Sobre o Escritório
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-atuacao"
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Áreas de Atuação */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-secondary">
              Áreas de Atuação
            </h4>
            <ul className="space-y-3">
              <li className="text-neutral-300 text-sm">Direito Civil</li>
              <li className="text-neutral-300 text-sm">Direito Empresarial</li>
              <li className="text-neutral-300 text-sm">Direito Trabalhista</li>
              <li className="text-neutral-300 text-sm">Direito Penal</li>
              <li className="text-neutral-300 text-sm">
                Direito Previdenciário
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-secondary">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin
                  className="text-secondary mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-neutral-300 text-sm">
                  Av. Santos Dumont, 2828
                  <br />
                  Aldeota, Fortaleza - CE
                  <br />
                  CEP: 60150-161
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-secondary flex-shrink-0" size={20} />
                <a
                  href="tel:+558532234567"
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  (85) 3223-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-secondary flex-shrink-0" size={20} />
                <a
                  href="mailto:contato@cavalcantiadvocacia.com.br"
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  contato@cavalcantiadvocacia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © {currentYear} Cavalcanti & Associados. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacidade"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
