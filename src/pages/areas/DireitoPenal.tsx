
import { motion } from "framer-motion";
import { ChevronLeft, Scale, Gavel, Home } from "lucide-react";
import { Link } from "react-router-dom";

const DireitoPenal = () => {
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
            <span className="text-lg font-playfair">Direito Penal</span>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-850 mb-6">
            Direito Penal
          </h1>
          <div className="h-1 w-20 bg-gold mb-8" />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-8">
              Nossa equipe especializada em Direito Penal oferece defesa criminal qualificada e consultoria jurídica em todas as áreas do direito criminal.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {[
                {
                  title: "Defesa Criminal",
                  desc: "Representação legal em processos criminais, garantindo seus direitos e a melhor defesa possível."
                },
                {
                  title: "Tribunal do Júri",
                  desc: "Experiência em casos complexos e atuação especializada em tribunal do júri."
                },
                {
                  title: "Crimes Financeiros",
                  desc: "Defesa em casos de crimes econômicos, tributários e contra o sistema financeiro."
                },
                {
                  title: "Habeas Corpus",
                  desc: "Atuação em pedidos de habeas corpus e medidas urgentes."
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
                Oferecemos uma defesa técnica e estratégica, sempre respeitando os princípios éticos e garantindo os direitos fundamentais de nossos clientes.
              </p>
              <ul className="space-y-4">
                {[
                  "Análise minuciosa do processo criminal",
                  "Estratégias de defesa personalizadas",
                  "Acompanhamento constante do cliente",
                  "Atendimento 24 horas em casos urgentes"
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

export default DireitoPenal;
