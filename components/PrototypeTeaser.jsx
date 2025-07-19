'use client';
import { motion } from 'framer-motion';
import { Scale, Group, Leaf } from 'lucide-react';
import Image from 'next/image';

const PrototypeTeaser = () => {
    const features = [
  {
    icon: <Group size={36}/>,
    title: 'Community-Owned',
    description: 'Empowers local communities to manage and benefit directly from tourism activities.',
  },
  {
    icon: <Scale size={36}/>,
    title: 'Scalable Design',
    description: 'Adapts to different regions with minimal adjustments for local contexts.',
  },
  {
    icon: <Leaf size={36}/>,
    title: 'Sustainable Growth',
    description: 'Ensures environmental, cultural, and economic sustainability long-term.',
  },
];

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-24 relative z-10">
      <div className="w-full mx-auto flex flex-col items-center">

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-2 font-bold md:text-[48px] text-[32px] text-center max-w-2xl"
        >
          Driving Community Based Tourism
        </motion.h2>

        {/* Illustration (Figma embed image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full max-w-7xl h-[400px] rounded-2xl overflow-hidden mb-12"
        >
          <img src='/prototype.png' alt='prototype'/>
        </motion.div>
      </div>
    </section>
  );
};

export default PrototypeTeaser;
