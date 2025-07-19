'use client';

import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';

interface cardProp {
    imgUrl: string;
    title: string;
    subtitle: string;
    link: string;
}

const ChallengeCard = ({ imgUrl, title, subtitle, link }: cardProp) => (
  <motion.div>
    <div className="max-w-7xl flex justify-between items-center gap-32">
      <div className="flex flex-1 gap-16">
      <img src={imgUrl} alt={title} className="aspect-[16:9] w-[350px] rounded-3xl object-cover" />
      <div className = 'flex flex-col justify-center max-w-[180px] md:max-w-[600px]'>
      <h2 className="font-bold text-foreground text-4xl">{title}</h2>
      <p className="mt-[16px] text-foreground/50">{subtitle}</p>
      </div>
      </div>

        <a href={link} target='blank' className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[3px] border-foreground">
          <MoveUpRight size={36} strokeWidth={2}/>
        </a>
    </div>
  </motion.div>
);

export default ChallengeCard;