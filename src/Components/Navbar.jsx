import { Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'Sobre' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projetos' },
    { id: 'contact', icon: Mail, label: 'Contato' }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-md">
      <div className="bg-dark-secondary/80 backdrop-blur-lg rounded-full px-6 py-4 shadow-2xl border border-purple-neon/20">
        <ul className="flex justify-around items-center gap-2">
          {navItems.map(({ id, icon: Icon, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`flex flex-col items-center gap-1 transition-all duration-300 group ${
                  activeSection === id ? 'text-purple-neon' : 'text-text-muted hover:text-purple-glow'
                }`}
                aria-label={label}
              >
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  activeSection === id 
                    ? 'bg-purple-neon/20 scale-110' 
                    : 'group-hover:bg-purple-glow/10'
                }`}>
                  <Icon size={20} strokeWidth={2} />
                </div>
                <span className="text-xs font-medium hidden sm:block">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;