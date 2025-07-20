'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    text: 'Identify the local tourism gaps and needs clearly.',
  },
  {
    number: '02',
    text: 'Design scalable solutions tailored to the community.',
  },
  {
    number: '03',
    text: 'Prototype and refine based on real feedback.',
  },
];

const PrototypeSection: React.FC = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-32 relative z-10 bg-secondary">
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
          <div className="mt-8 flex flex-col max-w-[370px] gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex justify-center items-center flex-row">
                <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
                  <p className="font-bold text-[20px] text-white">{step.number}</p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PrototypeSection;
