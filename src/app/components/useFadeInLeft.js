// components/useFadeInLeft.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useFadeInLeft = (duration = 1.5, delay = 0, x = -100) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element,
      { opacity: 0, x: x },
      { 
        opacity: 1, 
        x: 0, 
        duration: duration, 
        delay: delay, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom', // When the top of the element hits the bottom of the viewport
          end: 'bottom top',  // When the bottom of the element hits the top of the viewport
          toggleActions: 'play none none reverse', // Play animation on scroll down, reverse on scroll up
        },
      }
    );
  }, [duration, delay, x]);

  return ref;
};

export default useFadeInLeft;
