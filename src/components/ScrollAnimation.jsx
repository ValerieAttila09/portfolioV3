import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export function ScrollAnimation() {
  const containerRef = useRef(null);
  const box1Ref = useRef(null)
  const box2Ref = useRef(null)

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // let master = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: "top center",
    //     end: "bottom top",
    //     scrub: true,
    //     pin: containerRef.current,
    //     markers: true, // aktifkan jika ingin debugging
    //   },
    // })

    // function TimeLine() {
    //   return gsap.timeline().to(box1Ref.current, {
    //     width: "100%",
    //     yPercent: 10,
    //   }).to(box2Ref.current, {
    //     width: "100%",
    //     yPercent: 10,
    //   }, "-=0.5")
    // }

    // const begin = master.add(TimeLine())

    let sections = gsap.utils.toArray(".panel")

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=5000" + document.querySelector(".container")
      }
    })

  });

  return (
    <div ref={containerRef} className="container w-auto h-full flex flex-nowrap relative">
      {/* <div className="relative w-full h-[100vh] bg-transparent">
        <div ref={box1Ref} className="absolute top-0 left-0 w-[0px] h-[100px] bg-blue-500"></div>
        <div ref={box2Ref} className="absolute z-2 top-[30px] left-0 w-[0px] h-full bg-red-500"></div>
      </div> */}

      <div className="panel flex flex-justify-center items-center bg-transparent min-w-[100vw] h-[100vh]"></div>
      <div className="panel flex flex-justify-center items-center bg-dark/10 min-w-[100vw] h-[100vh]"></div>
      <div className="panel flex flex-justify-center items-center bg-dark/20 min-w-[100vw] h-[100vh]"></div>
      <div className="panel flex flex-justify-center items-center bg-dark/30 min-w-[100vw] h-[100vh]"></div>
      <div className="panel flex flex-justify-center items-center bg-dark/40 min-w-[100vw] h-[100vh]"></div>
      <div className="panel flex flex-justify-center items-center bg-dark/50 min-w-[100vw] h-[100vh]"></div>
      <div className="panel flex flex-justify-center items-center bg-dark/60 min-w-[100vw] h-[100vh]"></div>
      <div className="panel flex flex-justify-center items-center bg-dark/70 min-w-[100vw] h-[100vh]"></div>
      <div className="panel flex flex-justify-center items-center bg-dark/80 min-w-[100vw] h-[100vh]"></div>
      <div className="panel flex flex-justify-center items-center bg-dark/90 min-w-[100vw] h-[100vh]"></div>
      <div className="panel flex flex-justify-center items-center bg-dark min-w-[100vw] h-[100vh]"></div>

    </div>
  );
}