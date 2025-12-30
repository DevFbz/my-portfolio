import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
  //   { id: 'web', label: 'Web Apps' },
  //   // { id: 'mobile', label: 'Mobile' },
  //   // { id: 'design', label: 'Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'PlanShare',
      description: 'Este projeto é uma solução completa para o gerenciamento de tarefas, composta por uma API desenvolvida em .NET 9.',
      image: '/img-projects/8.png',
      category: 'mobile',
      tags: ['C#', '.Net 9', 'MySql', 'Maui'],
      github: 'https://github.com/DevFbz/PlanShare?tab=readme-ov-file',
      demo: '#'
    },
    {
      id: 2,
      title: 'Calculadora JS',
      description: 'Uma calculadora moderna e funcional, criada com HTML, CSS e JavaScript, que realiza operações básicas e possui uma interface limpa e responsiva.',
      image: '/img-projects/9.png',
      category: 'mobile',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/DevFbz/CalculadoraJS',
      demo: 'https://devfbz.github.io/CalculadoraJS/'
    },
    {
      id: 3,
      title: 'Piano Interativo',
      description: 'Projeto criado para praticar JavaScript, HTML e CSS, desenvolvendo um piano interativo que permite ao usuário tocar notas musicais diretamente no navegador.',
      image: '/img-projects/10.png',
      category: 'web',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/DevFbz/PianoHtml',
      demo: 'https://devfbz.github.io/PianoHtml/'
    },
    {
      id: 4,
      title: 'MoniBank',
      description: 'Monibank é um projeto de site desenvolvido para estudos, simulando a interface e o funcionamento básico de um banco digital moderno.',
      image: '/img-projects/11.png',
      category: 'app',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/DevFbz/MoniBank',
      demo: 'https://devfbz.github.io/MoniBank/'
    },
    {
      id: 5,
      title: 'AluraBooks',
      description: 'Este projeto foi criado para colocar em prática o consumo de APIs REST utilizando JavaScript moderno (ES6+).O projeto demonstra como conectar aplicações web a fontes de dados externas, tratar as informações retornadas e exibi-las de forma amigável ao usuário.',
      image: '/img-projects/12.png',
      category: 'web',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/DevFbz/AluraBooks-Cadastro',
      demo: 'https://devfbz.github.io/AluraBooks-Cadastro/'
    },
    {
      id: 6,
      title: 'Sistema de Gerenciamento de Notas Acadêmicas',
      description: 'Desenvolvi um sistema desktop de gerenciamento de alunos e notas utilizando Python, com interface gráfica em Tkinter e banco de dados PostgreSQL.',
      image: '/img-projects/1.png',
      category: 'mobile',
      tags: ['Python', 'Tkinter', 'PostgreSQL'],
      github: '#',
      demo: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-soft/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meus <span className="bg-gradient-to-r from-purple-neon to-magenta-accent bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Alguns dos trabalhos que desenvolvi recentemente, mostrando minhas habilidades e paixão por criar soluções digitais
          </p>
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === id
                  ? 'bg-gradient-to-r from-purple-neon to-magenta-accent text-white shadow-lg shadow-purple-neon/50'
                  : 'bg-dark-secondary text-text-secondary hover:text-purple-neon border border-purple-neon/20 hover:border-purple-neon/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-dark-secondary rounded-2xl overflow-hidden border border-purple-neon/10 hover:border-purple-neon/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-secondary/90 backdrop-blur-sm rounded-full hover:bg-purple-neon/20 border border-purple-neon/50 transition-colors"
                  >
                    <Github className="text-purple-neon" size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-secondary/90 backdrop-blur-sm rounded-full hover:bg-purple-neon/20 border border-purple-neon/50 transition-colors"
                  >
                    <ExternalLink className="text-purple-neon" size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-purple-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs bg-purple-neon/10 text-purple-glow rounded-full border border-purple-neon/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View More Link */}
                <a 
                  href={project.demo} target='_blank'
                  className="inline-flex items-center gap-2 text-purple-neon hover:text-magenta-accent transition-colors group/link"
                >
                  Ver Projeto
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/DevFbz" target='_blank'
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-secondary border-2 border-purple-neon rounded-full font-semibold text-purple-neon hover:bg-purple-neon/10 transition-all duration-300"
          >
            Ver Todos os Projetos
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;