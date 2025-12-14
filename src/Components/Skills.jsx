import { Code, Database, Palette, ServerCog, Smartphone, Zap, Cog } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Front-end',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      icon: ServerCog,
      title: 'Back-end',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express', level: 85 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Redis', level: 75 }
      ]
    },
    {
      icon: Palette,
      title: 'Design',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Photoshop', level: 70 }
      ]
    },
    {
      icon: Cog,
      title: 'DevOps',
      skills: [
        { name: 'Scrum', level: 75 },
        { name: 'Kanban', level: 65 },
        { name: 'Testes Web', level: 85 },
        { name: 'Automação de Testes', level: 95 }
      ]
    },
    {
      icon: Zap,
      title: 'Outras',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-magenta-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-neon/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-neon font-semibold text-2xl uppercase tracking-wider">Habilidades</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Minhas <span className="bg-gradient-to-r from-purple-neon to-magenta-accent bg-clip-text text-transparent">Especialidades</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Uma combinação de tecnologias modernas e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(({ icon: Icon, title, skills }) => (
            <div 
              key={title}
              className="bg-dark-primary rounded-2xl p-8 border border-purple-neon/10 hover:border-purple-neon/30 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-neon/10 rounded-xl group-hover:bg-purple-neon/20 transition-colors">
                  <Icon className="text-purple-neon" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-secondary font-medium">{name}</span>
                      <span className="text-purple-neon font-semibold">{level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-dark-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-neon to-magenta-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className="mt-16 text-center">
          <div className="inline-block bg-dark-primary rounded-2xl px-8 py-6 border border-purple-neon/20">
            <p className="text-text-secondary text-lg">
              💡 <span className="text-purple-neon font-semibold">Sempre aprendendo</span> e me atualizando com as últimas tendências e tecnologias do mercado
            </p>
          </div>
        </div> */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-dark-primary rounded-2xl px-8 py-6 border border-purple-neon/20">
            <p className="text-text-secondary text-lg">
              💡 <span className="text-purple-neon font-semibold">Se você só fizer o que sabe,</span> nunca será nada além do que já é.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;