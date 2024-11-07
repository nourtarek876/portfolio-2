// components/useFadeInCenter.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useFadeInCenter = (duration = 2, delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: duration, 
        delay: delay, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom', // Trigger animation when top of element hits bottom of viewport
          toggleActions: 'play none none reverse', // Reverse on scrolling out of view
        },
      }
    );

    // Clean up ScrollTrigger instance on component unmount
    return () => {
      if (element && ScrollTrigger.getById(element)) {
        ScrollTrigger.getById(element).kill();
      }
    };
  }, [duration, delay]);

  return ref;
};

export default useFadeInCenter;
