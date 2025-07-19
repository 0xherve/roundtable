'use client';

import { motion } from 'framer-motion';
import { challenges } from '../constants';
import ChallengeCard from './challengeCard';

const ChallengeSection = () => (
  <section className="px-6 py-24 text-foreground relative z-10" id='challenges'>
    
     <div className='flex flex-col justfy-center items-center py-12'>
      {/* Heading */}
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center"
      >
        E-Lab Challenges
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-4 text-lg text-foreground/75 text-center max-w-xl"
      >
        Our E-LAB journey, helped us understand communities better and develop solutions that create real impact.
      </motion.p>
      </div>


    {/* Challenge Cards Container */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-24 max-w-6xl mx-auto flex flex-col gap-12"
    >
      {challenges.map((challenge, index) => (
        <ChallengeCard
          key={index}
          imgUrl={challenge.image}
          title={challenge.title}
          subtitle={challenge.subtext}
          link={challenge.link}
        />
      ))}
    </motion.div>

  </section>
);

export default ChallengeSection;
