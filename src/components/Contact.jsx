import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
import { useGSAP } from '@gsap/react';
import BottomSheet from "./Bottomsheet";



export function Contact() {
  gsap.registerPlugin(Draggable)
  gsap.registerPlugin(useGSAP)

  useGSAP(() => {

  })



  
  return (
    <div className="w-full h-auto pt-[4rem] pb-[8rem] flex flex-col gap-5 p-3">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-6xl text-dark pt-sans-bold">Reach Out</h1>
          <h3 className="text-2xl md:text-3xl text-dark inter-bold">Feel Free to Drop a Message Anytime</h3>
        </div>
        <span className="text-lg text-greyDark">If you are interested in collaborating, have questions, or want to discuss a project, I would be happy to hear it. Please feel free to contact me via email or the available social media. I will respond to your messages as quickly as possible.</span>
      </div>

      <div className="w-full">
        <BottomSheet />
      </div>

    </div>
  )
}