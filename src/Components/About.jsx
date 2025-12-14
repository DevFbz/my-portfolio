import { Award,Code, Database, Palette, ServerCog } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, value: '', label: 'Front-End Jr' },
    { icon: ServerCog, value: '', label: 'Back-End Jr' },
    { icon: Database, value: '', label: 'Data Analytics' },
    { icon: Palette, value: '', label: 'UI/UX Designer' }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-soft/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-neon/20 to-magenta-accent/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-dark-secondary rounded-3xl overflow-hidden border border-purple-neon/20 shadow-2xl">
              <img 
                src="./src/assets/img/meybackground.jpg" 
                alt="About Me" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-purple-neon font-semibold text-2xl uppercase tracking-wider">Sobre Mim</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Transformando <span className="bg-gradient-to-r from-purple-neon to-magenta-accent bg-clip-text text-transparent">Ideias</span> em Realidade
              </h2>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  Sou um desenvolvedor full stack Jr apaixonado por criar soluções digitais inovadoras. 
                  Especializo-me em construir aplicações web modernas , análise de dados 
                  e responsivas que proporcionam experiências excepcionais aos usuários.
                </p>
                <p>
                  Minha jornada na tecnologia começou com curiosidade e se transformou em uma paixão 
                  por resolver problemas complexos através do código. Adoro trabalhar com as tecnologias 
                  mais recentes e estou sempre aprendendo algo novo.
                </p>
                <p>
                  Quando não estou programando, você pode me encontrar explorando novas tecnologias, 
                  contribuindo para projetos open source, ou compartilhando conhecimento com a comunidade.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div 
                  key={label}
                  className="bg-dark-secondary rounded-2xl p-6 border border-purple-neon/10 hover:border-purple-neon/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="p-3 bg-purple-neon/10 rounded-full group-hover:bg-purple-neon/20 transition-colors">
                      <Icon className="text-purple-neon" size={24} />
                    </div>
                    <span className="text-3xl font-bold text-text-primary">{value}</span>
                    <span className="text-text-muted text-sm">{label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <a
              target='_blank'
                href="./src/assets/Curriculo_Breno_Fabrizio_Estagio25.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-neon to-magenta-accent rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-neon/50 transform hover:scale-105 transition-all duration-300"
              >
                <Award size={20} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;