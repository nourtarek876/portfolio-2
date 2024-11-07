// components/useFadeInRight.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useFadeInRight = (duration = 2, delay = 0, x = 100) => {
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
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [duration, delay, x]);

  return ref;
};

export default useFadeInRight;
