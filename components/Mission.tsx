'use client';
import { motion } from 'framer-motion';

const SolutionSection: React.FC = () => {
    const lines = [
    'Simple tourism models,',
    'empowered communities,',
    'lasting economic freedom.'
  ];
  return (
    <section id='about'
    className="w-full h-screen px-8 py-24 flex flex-col items-center justify-center text-center bg-accent text-secondary">
      <div className="space-y-2">
        {lines.map((line, index) => (
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 , scale: 1.5}}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-2xl md:text-7xl md:leading-[2] text-start font-extrabold"
          >
            {line}
          </motion.h2>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
