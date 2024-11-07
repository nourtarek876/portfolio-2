// components/useFadeInBottom.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useFadeInBottom = (duration = 1, delay = 0, y = -20) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element,
      { opacity: 0, y: y },
      { 
        opacity: 1, 
        y: 0, 
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
  }, [duration, delay, y]);

  return ref;
};

export default useFadeInBottom;
