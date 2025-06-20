import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export function ScrollAnimation() {
  const containerRef = useRef(null);
  
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

    let master = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=5000" + document.querySelector(".container")
      }
    })

    let sections = gsap.utils.toArray(".panel")

    gsap.set(".title", {
      xPercent: 60,
    })

    function TimeLine() {
      return gsap.timeline().to(sections, {
        xPercent: -100 * 2 * (sections.length - 1),
        ease: "none",
      }).to(".title", {
        xPercent: -80 * (sections.length - 1),
        ease: "none"
      }, "-=0.5")
    }

    let begin = master.add(TimeLine())


  });

  return (
    <div ref={containerRef} className="container bg-secondaryLight w-full h-full flex flex-nowrap relative">
      <div className="absolute z-5 inset-0 bg-transparent">
        <div className="w-full h-full relative flex justify-start items-center">
          <h1 className='title absolute z-8 text-start text-5xl md:text-6xl lg:text-7xl inter-bold text-shadow-md text-nowrap'>
            <span>"Programming isn't about what you know, it's about what you can figure out."</span>
          </h1>
        </div>
      </div>

      <div className="panel min-w-[100vw] h-[100vh] relative bg-secondaryLight">
        <div className="w-full h-full relative flex justify-center items-center">

        </div>
      </div>
      <div className="panel min-w-[100vw] h-[100vh] relative bg-secondaryLight">
        <div className="w-full h-full relative flex flex justify-center items-end">
          <div className="w-full h-1/2 px-4 md:px-8 flex flex-col justify-center items-start">
            <span className='text-2xl text-shadow-sm text-greyDark inter-semibold'>— Chris Pine</span>
          </div>
        </div>
      </div>
      



    </div>
  );
}