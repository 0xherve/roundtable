'use client';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  const info = [
    {
      title: 'The Problem',
      paragraph: 'Despite abundant cultural and natural resources, many African communities remain financially dependent due to underdeveloped tourism frameworks and limited strategic urbanization.'
    },
    {
      title: 'The Solution',
      paragraph: 'We create innovative, sustainable tourism models that leverage urbanization to empower communities to build self-reliant, thriving local economies.'
    }
  ]
  return (
    <section className="w-full px-8 py-24 bg-secondary flex flex-col items-center">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        
        {/* Problem and Solution Block */}
        {
          info.map((data) => (
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          key={data.title}
          className="bg-background border border-muted/25 rounded-3xl p-12 space-y-4"
        >
          <div>
            <h2 className="text-3xl font-bold">{data.title}</h2>
          <p className="text-base md:text-lg text-foreground/75 m-2">
          {data.paragraph}  
          </p>
          </div>
        </motion.div>
          ))
        }


      </div>

    </section>
  );
};

export default ProblemSection;
