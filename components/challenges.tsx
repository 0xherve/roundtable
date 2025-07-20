'use client';

import { motion } from 'framer-motion';
import {challenges} from '../constants'
import ChallengeCard from './challengeCard';


const ChallengeSection = () => (
  <section className={'relative z-10'}>
    <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={'mx-auto flex flex-col'}
    >
        <div>
            <h2>

            </h2>
        </div>
    </motion.div>

    <div className='flex flex-col items-center px-8 py-24 gap-8'>
        {challenges.map((challenge) => (
            <ChallengeCard key={challenge.title}
            imgUrl={challenge.image} title={challenge.title} subtitle={challenge.subtext} link={challenge.link}/>
        ))}
    </div>
  </section>
);

export default ChallengeSection;