import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, url: 'mailto:seu@email.com', label: 'Email' }
  ];

  return (
    <footer className="bg-dark-primary relative overflow-hidden pb-24 md:pb-8">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-neon/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-magenta-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-neon to-magenta-accent bg-clip-text text-transparent">
              DevFbz
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-md">
              Desenvolvedor Full Stack Jr apaixonado por criar experiências digitais incríveis. 
              Transformando ideias em realidade através do código.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-secondary rounded-full border border-purple-neon/20 hover:border-purple-neon hover:bg-purple-neon/10 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="text-text-secondary group-hover:text-purple-neon transition-colors" size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-text-secondary hover:text-purple-neon transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-purple-neon group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <a href="brenofabrizio2018@gmail.com" className="hover:text-purple-neon transition-colors">
                brenofabrizio2018@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5521993668459" className="hover:text-purple-neon transition-colors">
                  +55 (21) 99366-8459
                </a>
              </li>
              <li className="text-sm">
                Rio de Janeiro, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-neon/10"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm text-center md:text-left">
            © {currentYear} DevFbz. Feito com <Heart className="inline text-magenta-accent" size={16} fill="currentColor" /> e muito café
          </p>
          
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-purple-neon transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-purple-neon transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-28 md:bottom-6 z-40 p-4 bg-gradient-to-r from-purple-neon to-magenta-accent rounded-full shadow-lg shadow-purple-neon/50 hover:shadow-xl hover:shadow-purple-neon/70 transform hover:scale-110 transition-all duration-300 group"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="text-white group-hover:translate-y-[-2px] transition-transform" size={20} />
      </button>
    </footer>
  );
};

export default Footer;