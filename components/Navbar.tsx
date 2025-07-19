'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background text-foreground px-12 py-4 border-muted border-b">
      <div className="flex justify-between items-center">
        {/* Logo and Burger Menu */}
        <div className="flex items-center space-x-4">
          <a href="/" className='flex items-center gap-4'>
            <Image src='/round.png' alt="logo" width={45} height={45} />
            <h1 className='text-accent text-[24px]'>the RoundTable</h1>
          </a>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            />
            <Image src='/twitter.svg' alt="bars" width={30} height={30} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className={`lg:flex space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          {links.map((link) => (
            <button
              key={link.title}
              onClick={() => handleScroll(link.url)}
              className="text-foreground cursor-pointer"
            >
              {link.title}
            </button>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="flex items-center space-x-4">
          <a
            href="https://docs.google.com/presentation/d/1Wn7Asp8f-I9GVV6PvjV0vJBU1nf_0t-lR_PeSiADNys/edit?usp=sharing"
            className='text-primary font-bold bg-accent rounded-full px-6 py-3'
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
