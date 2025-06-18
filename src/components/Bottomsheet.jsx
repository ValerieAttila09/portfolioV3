// BottomSheet.jsx
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable);

const BottomSheet = () => {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const openY = 0;
  const closedY = window.innerHeight * 1;


  useGSAP(() => {
    gsap.set(sheetRef.current, { y: closedY });

    Draggable.create(sheetRef.current, {
      type: "y",
      bounds: { 
        minY: openY, 
        maxY: closedY 
      },
      inertia: true,
      onDragEnd: function () {
        const currentY = this.y;
        const snap = currentY > (openY + closedY) / 2 ? closedY : openY;

        gsap.to(sheetRef.current, {
          y: snap,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            setIsOpen(snap === openY);
          }
        });
      }
    });
  }, []);

  const toggleSheet = () => {
    const targetY = isOpen ? closedY : openY;
    gsap.to(sheetRef.current, {
      y: targetY,
      duration: 0.4,
      ease: "power2.out",
    });
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSheet} className="rounded-full bg-dark px-5 py-2 hover:bg-greyLight transition-all">
        <span className="text-xl text-light">Contact Me</span>
      </button>

      <div ref={sheetRef} className="fixed bottom-0 inset-x-0 md:inset-x-[6rem] bg-white rounded-tr-[22px] rounded-tl-[22px] shadow-2xl touch-none z-[99] p-4">
        <div className="w-full max-h-[100vh] overflow-y-scroll grid gap-4">
          <div className="w-full flex justify-center items-center">
            <div className="w-[10rem] h-1 bg-neutral-300 rounded-full" />
          </div>
          <div className="contact-content py-2 relative">
            <div className="w-full h-full">
              <form className="w-full grid gap-2 py-2 px-1 md:px-[2rem] md:gap-3" action="">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="md:w-full flex flex-col">
                    <label htmlFor="firstName" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                      <span className="text-sm text-greyLight">First Name</span>
                      <input required type="text" name="firstName" className="outline-none" />
                    </label>
                  </div>
                  <div className="md:w-full flex flex-col">
                    <label htmlFor="lastName" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                      <span className="text-sm text-greyLight">Last Name</span>
                      <input required type="text" name="lastName" className="outline-none" />
                    </label>
                  </div>
                </div>
                <div className="flex w-full gap-2">
                  <div className="w-1/2">
                    <label htmlFor="gender" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                      <span className="text-sm text-greyLight">Gender</span>
                      <select required name="graduate" id="graduate" className="outline-none transition-all">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="graduate" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                      <span className="text-sm text-greyLight">Graduate</span>
                      <select required name="graduate" id="graduate" className="outline-none transition-all">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                      <span className="text-sm text-greyLight">Email</span>
                      <input required type="email" name="email" className="outline-none" />
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="message" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                    <span className="text-sm text-greyLight">Message</span>
                    <textarea required name="message" className="outline-none" />
                  </label>
                </div>
                <div className="w-full">
                  <div className="flex items-center gap-2 py-2">
                    <svg className="size-5 text-greyLight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    <span className="text-md text-greyDark">By this, you have agreed to my privacy and policy</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full p-2 flex justify-between items-center gap-2">
                    <button type="submit" className="w-2/3 text-lg p-2 text-light hover:bg-greyLight transition-all bg-dark rounded-full ">Submit</button>
                    <button type="button" onClick={() => toggleSheet()} className="w-1/3 text-lg p-2 text-light hover:bg-greyLight  transition-all bg-greyDark rounded-full ">Return</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSheet;
