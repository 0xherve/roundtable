'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: '/ic_community.svg',
    title: 'Community Empowerment',
    description: 'Our prototype ensures local communities manage and benefit directly from tourism initiatives.',
  },
  {
    icon: '/ic_scalable.svg',
    title: 'Scalable Design',
    description: 'Easily adaptable to different regions with minimal cost adjustments for implementation.',
  },
  {
    icon: '/ic_sustainability.svg',
    title: 'Sustainability Focused',
    description: 'Prioritises environmental, cultural, and economic sustainability in tourism practices.',
  },
];

const Prototype: React.FC = () => {
  return (
    <section className="w-full px-6 py-12 sm:p-16 xs:p-8 relative z-10 bg-gray-900 text-white">
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-10">
        
        {/* Hero Text */}
        <header className="flex flex-col gap-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold"
          >
            Our Prototype
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            See how our tourism model platform empowers communities towards financial self-reliance.
          </motion.p>
        </header>

        {/* Banner Image */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/prototype_banner.png" // replace with your prototype banner image
            alt="Prototype Banner"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-gray-800 rounded-2xl p-6 gap-4"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
              />
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Prototype;
