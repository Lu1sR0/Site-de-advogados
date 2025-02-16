import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, MapPin, ChevronRight, Gavel, Scale, Briefcase, BookOpen, Clock, Award, Shield, Users, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const areaLinks = [
    { title: "Direito Civil", path: "/areas/direito-civil" },
    { title: "Direito Penal", path: "/areas/direito-penal" },
    { title: "Direito Trabalhista", path: "/areas/direito-trabalhista" },
    { title: "Direito Empresarial", path: "/areas/direito-empresarial" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <motion.header 
        style={{ opacity: headerOpacity }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-2xl font-playfair font-bold ${
                scrolled ? "text-neutral-850" : "text-white"
              }`}
            >
              Advocacia
            </motion.h1>

            <div className="hidden md:flex items-center space-x-8 font-inter">
              {["Início", "Áreas de Atuação", "Nossa Equipe", "Contato"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`nav-link ${
                    scrolled ? "text-neutral-600" : "text-white"
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white z-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          <motion.div
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuVariants}
            className="md:hidden fixed inset-0 bg-neutral-850/95 backdrop-blur-md z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {["Início", "Áreas de Atuação", "Nossa Equipe", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-2xl hover:text-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.header>

      <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-neutral-850/70 z-10" 
        />
        
        <motion.div
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, 300]),
            backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')`,
          }}
          className="absolute inset-0 bg-cover bg-center scale-110"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="container relative z-20 text-center px-4">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1 
              variants={heroTextVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white font-bold mb-6"
            >
              Experiência e Dedicação<br />em Cada Caso
            </motion.h1>
            
            <motion.p 
              variants={heroTextVariants}
              className="text-lg md:text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto"
            >
              Há mais de 20 anos oferecendo soluções jurídicas personalizadas com a excelência que seu caso merece
            </motion.p>

            <motion.div
              variants={heroTextVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#contato" className="hero-button hero-button-primary">
                Fale Conosco
              </a>
              
              <a href="#nossa-equipe" className="hero-button hero-button-secondary">
                Conheça Nossa Equipe
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/80 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>


      <section className="py-16 bg-neutral-50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Atendimento Ágil", desc: "Resposta rápida às suas necessidades" },
              { icon: Award, title: "Experiência", desc: "Anos de atuação no mercado" },
              { icon: Shield, title: "Compromisso", desc: "Dedicação total ao seu caso" },
              { icon: Users, title: "Equipe Especializada", desc: "Profissionais capacitados" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6"
              >
                <item.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-playfair font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
   

      <section id="areas" className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-850 mb-4">
              Áreas de Atuação
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6" />
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Oferecemos assistência jurídica especializada em diversas áreas do direito
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gavel, title: "Direito Civil", desc: "Contratos, Família, Sucessões" },
              { icon: Scale, title: "Direito Penal", desc: "Defesa Criminal Especializada" },
              { icon: Briefcase, title: "Direito Empresarial", desc: "Consultoria Empresarial" },
              { icon: BookOpen, title: "Direito Trabalhista", desc: "Relações de Trabalho" },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-8 rounded-lg hover:shadow-lg transition-all group cursor-pointer"
              >
                <area.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-playfair font-semibold mb-2">{area.title}</h3>
                <p className="text-neutral-600 mb-4">{area.desc}</p>
                <ChevronRight className="w-5 h-5 text-gold transform group-hover:translate-x-2 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section id="nossa-equipe" className="py-20 bg-neutral-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-850 mb-4">
              Nossa Equipe
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6" />
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Conheça nossos advogados especializados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. João Silva", area: "Direito Civil", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a" },
              { name: "Dra. Maria Santos", area: "Direito Penal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" },
              { name: "Dr. Pedro Oliveira", area: "Direito Empresarial", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" },
              { name: "Dra. Ana Costa", area: "Direito Trabalhista", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden group"
              >
                <div className="team-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-image"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-1">{member.name}</h3>
                  <p className="text-neutral-600">{member.area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section id="contato" className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-850 mb-6">
                Entre em Contato
              </h2>
              <div className="w-20 h-1 bg-gold mb-8" />
              <p className="text-neutral-600 mb-8">
                Estamos prontos para atender suas necessidades jurídicas. Entre em contato conosco para uma consulta inicial gratuita.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Phone, info: "(11) 9999-9999", label: "Telefone" },
                  { icon: Mail, info: "contato@escritorio.com", label: "Email" },
                  { icon: MapPin, info: "Av. Paulista, 1000 - São Paulo, SP", label: "Endereço" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <contact.icon className="w-6 h-6 text-gold" />
                    <div>
                      <p className="text-neutral-600 text-sm">{contact.label}</p>
                      <p className="font-medium">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Nome"
                    className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Assunto"
                  className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <textarea 
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <button className="w-full bg-gold hover:bg-gold-light text-white font-inter font-medium px-8 py-3 rounded-md transition-all">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-neutral-850 text-white/80 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">Advocacia</h3>
              <p className="mb-6">
                Comprometidos com a excelência jurídica e a satisfação de nossos clientes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gold transition-colors">
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#início" className="footer-link">Início</a>
                </li>
                <li>
                  <a href="#areas" className="footer-link">Áreas de Atuação</a>
                </li>
                <li>
                  <a href="#nossa-equipe" className="footer-link">Nossa Equipe</a>
                </li>
                <li>
                  <a href="#contato" className="footer-link">Contato</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Áreas de Atuação</h4>
              <ul className="space-y-3">
                {areaLinks.map((area) => (
                  <li key={area.path}>
                    <Link to={area.path} className="footer-link">
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+551199999999" className="footer-link flex items-center space-x-3">
                    <Phone size={20} />
                    <span>(11) 99999-9999</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@escritorio.com" className="footer-link flex items-center space-x-3">
                    <Mail size={20} />
                    <span>contato@escritorio.com</span>
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin size={20} />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p>&copy; 2024 Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
