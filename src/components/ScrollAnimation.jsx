import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export function ScrollAnimation() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      {
        yPercent: 0,
        opacity: 0,
        scale: 0.8,
        filter: "blur(4px)",
      },
      {
        yPercent: 40,
        opacity: 1,
        scale: 1.2,
        filter: "blur(0px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
          pin: containerRef.current,
          markers: true, // aktifkan jika ingin debugging
        },
      }
    );
  });

  return (
    <div ref={containerRef} className="container relative w-full">
      <div className="w-full h-[50vh] bg-transparent flex justify-center items-center">
        <h1
          ref={titleRef}
          className="text-5xl text-dark drop-shadow-lg transition-all"
        >
          Hello World
        </h1>
      </div>
    </div>
  );
}