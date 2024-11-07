"use client"
import { useState } from 'react';
import Link from 'next/link';
import FadeInBottomComponent from './FadeInBottomComponent';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (<>
  <FadeInBottomComponent>
    <header className="bg-primary py-4 navbar">
      <div className="container mx-auto flex flex-wrap items-center justify-between relative">
        <div className="logo text-blue-50 text-2xl font-bold">Mohamed Mohsen</div>
        <button
          className=" text-blue-50 block lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-6 lg:items-center lg\:w-auto absolute lg:relative top-full left-0 lg:top-auto lg:left-auto bg-primary w-full lg:w-auto`}
          aria-expanded={isOpen}
        >
          <div className="lg:flex text-blue-50 lg:space-x-6 lg:items-center">
            <Link href="#about" onClick={() => setIsOpen(false)} className="block py-2 px-4 links-nav text-lg">About</Link>
            <Link href="#work" onClick={() => setIsOpen(false)} className="block py-2 px-4 links-nav text-lg">My Work</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="block py-2 px-4 links-nav text-lg">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
    </FadeInBottomComponent>
    </>
  );
}


