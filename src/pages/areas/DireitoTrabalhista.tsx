
import { motion } from "framer-motion";
import { ChevronLeft, Scale, Gavel, Home } from "lucide-react";
import { Link } from "react-router-dom";

const DireitoTrabalhista = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-md"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-neutral-600 hover:text-gold transition-colors">
              <Home size={24} />
            </Link>
            <ChevronLeft size={20} className="text-neutral-400" />
            <span className="text-lg font-playfair">Direito Trabalhista</span>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="section-title">
            Direito Trabalhista
          </h1>
          <div className="h-1 w-20 bg-gold mb-8" />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-8">
              Nossa equipe especializada em Direito Trabalhista oferece assistência completa para empregados e empregadores, garantindo a proteção dos direitos e o cumprimento da legislação trabalhista.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {[
                {
                  title: "Reclamações Trabalhistas",
                  desc: "Representação em processos trabalhistas, buscando seus direitos e a justa compensação."
                },
                {
                  title: "Acordos e Negociações",
                  desc: "Mediação e negociação de acordos trabalhistas, visando soluções satisfatórias."
                },
                {
                  title: "Consultoria Preventiva",
                  desc: "Orientação para empresas sobre compliance trabalhista e prevenção de litígios."
                },
                {
                  title: "Direitos do Trabalhador",
                  desc: "Defesa dos direitos trabalhistas, incluindo questões salariais e benefícios."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-playfair font-semibold mb-3">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Nossa Abordagem
              </h2>
              <p className="text-neutral-600 mb-6">
                Oferecemos um serviço personalizado e humanizado, compreendendo a importância das relações de trabalho e buscando sempre as melhores soluções para nossos clientes.
              </p>
              <ul className="space-y-4">
                {[
                  "Análise detalhada de cada caso",
                  "Atendimento personalizado",
                  "Acompanhamento processual completo",
                  "Soluções eficientes e ágeis"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Scale className="text-gold" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Link
                to="/contato"
                className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-light text-white px-8 py-3 rounded-md transition-colors"
              >
                <span>Agende uma Consulta</span>
                <Gavel size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DireitoTrabalhista;
