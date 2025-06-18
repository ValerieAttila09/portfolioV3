import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export function Entrance() {
  useGSAP(() => {
    gsap.to(".block1", {
      xPercent: 100,
      duration: 0.8,
      ease: "power2.out",
      delay: 1
    })
    gsap.to(".block2", {
      xPercent: -100,
      duration: 0.8,
      ease: "power2.out",
      delay: 1
    })
    gsap.to(".block3", {
      yPercent: -130,
      duration: 0.8,
      ease: "power2.out",
      delay: 1.2
    })
    gsap.to(".block4", {
      yPercent: 130,
      duration: 0.8,
      ease: "power2.out",
      delay: 1.2
    })
  })

  return (
    <>
      <div className="block1 fixed inset-x-0 top-0 h-1/2 bg-black z-50"></div>
      <div className="block2 fixed inset-x-0 bottom-0 h-1/2 bg-black z-50"></div>
      <div className="block3 fixed inset-x-0 top-0 h-1/2 bg-black z-40"></div>
      <div className="block4 fixed inset-x-0 bottom-0 h-1/2 bg-black z-40"></div>
    </>
  )
}