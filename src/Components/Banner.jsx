import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Dev Full Stack Jr', 'UI/UX Designer', 'Data Analytics'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const socialLinks = [
    { icon: Github, url: 'https://github.com/DevFbz', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/breno-fabrizio-92b701221/', label: 'LinkedIn' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-black via-dark-primary"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 lg:w-120 hidden md:block lg:h-120 w-100 h-100 bg-purple-neon/transparent rounded-full animate-pulse delay-2000">

      <img
      className="w-full h-full object-cover blur-4xl" 
      src="/img/bobackground1.png" alt="" />
      
      </div>
      <div className="absolute bottom-20 right-10 w-100 h-100 hidden md:block bg-magenta-accent/transparent rounded-full animate-pulse delay-2000">
      
      <img
      className="w-full h-full object-cover blur-4xl" 
      src="/img/bobackground2.png" alt="" />

      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col items-center text-center ">
          {/* Profile Image */}
          <div className="mb-8 relative group ">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-neon to-magenta-accent  blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70"></div>
            <div className="relative w-30 h-30 md:w-30 md:h-30 overflow-hidden rounded-[50px] border-4 border-purple-neon/50 shadow-2xl">
              <img 
                src="/img/avatar1-1.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 mb-4 w-[450px]">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Olá, eu sou <span className="bg-gradient-to-r from-purple-neon to-magenta-accent bg-clip-text text-transparent">Breno Fabrizio</span>
            </h1>
            
            <div className="h-16 md:h-20">
              <p className="text-2xl md:text-3xl lg:text-4xl text-text-secondary font-medium">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-text-muted max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Apaixonado por criar experiências digitais incríveis e transformar ideias em realidade através do código
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-12">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-secondary border border-purple-neon/30 hover:border-purple-neon hover:bg-purple-neon/10 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="text-text-secondary group-hover:text-purple-neon transition-colors" size={24} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:mb-[50px] sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-neon to-magenta-accent rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-neon/50 transform hover:scale-105 transition-all duration-300"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-purple-neon rounded-full font-semibold text-purple-neon hover:bg-purple-neon/10 transition-all duration-300"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className=" text-purple-neon" size={32} />
      </div>
    </section>
  );
};

export default Banner;