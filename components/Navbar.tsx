'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '../constants';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background text-foreground px-12 py-4 border-muted border-b">
      <div className="flex justify-between items-center">
        {/* Logo and Burger Menu */}
        <div className="flex items-center space-x-4">
          <a href="/" className='flex items-center gap-4'>
          <Image src= '/round.png' alt="logo" width={45} height={45} />
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
            <Image src= '/twitter.svg' alt="bars" width={30} height={30} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className={`lg:flex space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          {links.map((link, i) => (
            <Link href={link.url} key={link.title}> 
            {link.title}
            </Link>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="flex items-center space-x-4">
          <Link href="https://docs.google.com/presentation/d/1Wn7Asp8f-I9GVV6PvjV0vJBU1nf_0t-lR_PeSiADNys/edit?usp=sharing"  className='text-primary font-bold bg-accent rounded-full px-6 py-3'>
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
