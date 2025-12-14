import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const MailchimpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos.');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Por favor, insira um email válido.');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Simulação de envio (substitua pela sua integração com Mailchimp)
    try {
      // Aqui você integraria com a API do Mailchimp
      // const response = await fetch('YOUR_MAILCHIMP_API_ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Simulação de sucesso após 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset após 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Erro ao enviar mensagem. Tente novamente.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-neon/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-magenta-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-purple-neon font-semibold text-2xl uppercase tracking-wider">Contato</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Vamos <span className="bg-gradient-to-r from-purple-neon to-magenta-accent bg-clip-text text-transparent">Conversar</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Tem um projeto em mente? Entre em contato e vamos transformar suas ideias em realidade!
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-primary rounded-3xl p-8 md:p-12 border border-purple-neon/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-dark-secondary border border-purple-neon/30 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-neon focus:ring-2 focus:ring-purple-neon/20 transition-all"
                  placeholder="Seu nome"
                  disabled={status === 'loading' || status === 'success'}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-dark-secondary border border-purple-neon/30 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-neon focus:ring-2 focus:ring-purple-neon/20 transition-all"
                  placeholder="seu@email.com"
                  disabled={status === 'loading' || status === 'success'}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-6 py-4 bg-dark-secondary border border-purple-neon/30 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-neon focus:ring-2 focus:ring-purple-neon/20 transition-all resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                  disabled={status === 'loading' || status === 'success'}
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <CheckCircle className="text-green-500" size={24} />
                  <p className="text-green-500 font-medium">
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <AlertCircle className="text-red-500" size={24} />
                  <p className="text-red-500 font-medium">{errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-neon to-magenta-accent rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple-neon/50 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Enviando...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Enviado!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-purple-neon/20">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a 
                  href="mailto:seu@email.com"
                  className="flex items-center gap-3 text-text-secondary hover:text-purple-neon transition-colors group"
                >
                  <div className="p-3 bg-purple-neon/10 rounded-full group-hover:bg-purple-neon/20 transition-colors">
                    <Mail size={20} className="text-purple-neon" />
                  </div>
                  <span className="font-medium">brenofabrizio2018@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailchimpForm;