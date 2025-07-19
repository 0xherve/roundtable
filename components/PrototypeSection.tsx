'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Layers, Home, Leaf, } from 'lucide-react';

const steps = [
  {
    image: <Home  />,
    title: 'Community-Owned',
    description: 'Empowers local communities to manage and benefit directly from tourism activities.',
  },
  {
    image: <Layers />,
    title: 'Scalable Design',
    description: 'Adapts to different regions with minimal adjustments for local contexts.',
  },
  {
    image: <Leaf/>,
    title: 'Sustainable Growth',
    description: 'Ensures environmental, cultural, and economic sustainability long-term.',
  },
];

const PrototypeSection: React.FC = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-32 relative z-10 bg-secondary" id='prototype'>
      <div className="2xl:max-w-7xl w-full mx-auto flex lg:flex-row flex-col gap-8 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex justify-center items-center flex-1"
        >
          <Image
            src="/trees.jpg" // replace with your prototype image path
            alt="Prototype"
            width={500}
            height={500}
            className="w-[90%] h-[90%] object-contain rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text and Steps */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex-[0.75] flex justify-center flex-col text-white"
        >
          <h2 className="mt-2 font-bold md:text-[48px] text-[32px]">
            Bringing Our Solution to Life
          </h2>

          {/* Steps */}
         <div className="mt-8 flex flex-col max-w-[500px] gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              
              {/* Icon */}
              <div className="flex flex-none justify-center items-center w-[48px] h-[48px] rounded-xl bg-muted">
                {step.image}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h3 className="font-medium text-foreground text-[28px]">
                  {step.title}
                </h3>
                <p className="font-normal text-[18px] text-foreground/50 leading-[32px]">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        </motion.div>

      </div>
    </section>
  );
};

export default PrototypeSection;
