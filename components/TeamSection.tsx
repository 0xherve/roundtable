'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { team } from '@/constants';

const TeamSection = () => {
  return (
    <section className="w-full px-8 py-20 bg-secondary text-foreground flex flex-col items-center" id='team'>

      <div>
      {/* Heading */}
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center"
      >
        Meet Our Team
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-4 text-lg text-foreground/75 text-center max-w-xl"
      >
        A passionate group dedicated to creating financial self-reliance for African communities through tourism innovation.
      </motion.p>
      </div>

      {/* Team Members Grid */}
      <div className="grid md:grid-cols-3 gap-12 mt-12 max-w-5xl w-full ">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-background border border-muted/25 rounded-2xl p-6"
          >
            <div className="w-48 h-48 mb-4 rounded-full overflow-hidden">
              <Image
                src={member.picture}
                alt={member.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default TeamSection;
