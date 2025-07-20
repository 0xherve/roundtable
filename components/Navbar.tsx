'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '../constants';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-foreground px-12 py-8 mb-8">
      <div className="flex justify-between items-center">
        {/* Logo and Burger Menu */}
        <div className="flex items-center space-x-4">
          <Image src= '/twitter.svg' alt="raft_logo" width={45} height={45} />
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
          <Link href="Login"  />
          <button className='text-primary font-bold bg-accent rounded-full px-6 py-3'>
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
