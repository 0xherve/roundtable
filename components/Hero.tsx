'use client';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen px-8 pt-32 pb-16 flex flex-col items-center justify-between">
      
      {/* Text Content */}
      <div className="max-w-3xl w-full flex flex-col items-center text-center gap-6">
        
        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-2 bg-accent text-border-muted text-sm font-bold px-4 py-2 rounded-full"
        >
          <span>Introducing the Round Table</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl capitalize font-extrabold leading-tight"
        >
          Empowering communities with urbanized tourism 
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="text-base md:text-lg text-foreground/75 max-w-2xl"
        >
          We drive economic self-reliance by strategically leveraging urbanization to develop tourism models that empower communities to own their future.
        </motion.p>
      </div>

      {/* Sliding Image Full Width */}
      <div className='mt-16 w-[1200px] relative rounded-3xl overflow-hidden object-cover'>
         <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          className=''
        >
          <img
            src="/beach.jpeg"
            alt="Empowerment Visual"
            className="w-full h-auto object-cover rounded-3xl border border-secondary"
          />
        </motion.div>
      </div>
       


    </section>
  );
};

export default HeroSection;
