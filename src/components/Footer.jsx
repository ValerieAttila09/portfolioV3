import footerImage from "../assets/images/cube.png"

export function Footer() {
  return (
    <>
      <div className="w-full">
        <div className="translate-y-[7rem] md:translate-y-[12rem] shadow-2xl shadow-black mx-[2rem] md:mx-[8rem] overflow-hidden rounded-xl bg-gradient-to-br from-light to-greyDark p-[1px]">
          <div className="bg-gradient-to-bl rounded-xl from-black via-dark to-purple-950">
            <div className="w-full h-full flex gap-6">
              <div className="w-full md:w-1/2 p-6 md:p-10">
                <h1 className="text-4xl md:text-5xl text-wrap text-light pt-sans-bold">Wanna be an expert in Programming?</h1>
                <h3 className="text-md mt-1 text-neutral-300">Join our community in Discord</h3>
                <br />
                <button className="bg-light rounded-md px-4 py-1 hover:bg-dark hover:text-light transition-all">Join Now</button>
              </div>
              <div className="hidden w-1/2 h-full md:flex justify-center items-center">
                <img src={footerImage} className="w-auto h-auto" alt="" />
              </div>
            </div>

          </div>
        </div>

        <div className="w-full h-auto bg-dark rounded-tr-2xl rounded-tl-2xl">
          <div className="pt-[12rem] md:pt-[20rem] w-full h-full flex flex-col md:flex-row justify-end md:justify-center items-center gap-[5rem] p-[2rem] md:py-[5rem] md:px-[8rem]">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-light">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                  </svg>
                  <span className="text-xl inter-bold text-light">Valerie's Portfolio</span>
                </div>
                <span className="text-sm md:text-md text-greyLight grid">
                  <span>Jl. Sumber Amal, Marendal</span>
                  <span>Kota Medan, Sumatera Utara</span>
                  <span>Indonesia</span>
                </span>
                <div className="w-full flex flex-col md:flex-row gap-4 md:gap-[2.5rem]">
                  <div className="flex flex-col">
                    <span className="text-sm md:text-md text-greyLight">Phone Number</span>
                    <span className="text-sm md:text-md text-light">+62 812-6297-9718</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-md text-greyLight">Email</span>
                    <span className="text-sm md:text-md text-light">valeriattilaalfath@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full flex flex-wrap flex-row gap-[2.5rem]">
                <div className="flex flex-col gap-3">
                  <span className="text-sm md:text-md text-greyLight">Quick Access</span>
                  <span className="text-sm md:text-md text-light">Home</span>
                  <span className="text-sm md:text-md text-light">About</span>
                  <span className="text-sm md:text-md text-light">Projects</span>
                  <span className="text-sm md:text-md text-light">Contact</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-sm md:text-md text-greyLight">Social</span>
                  <span className="text-sm md:text-md text-light">WhatsApp</span>
                  <span className="text-sm md:text-md text-light">Instagram</span>
                  <span className="text-sm md:text-md text-light">Github</span>
                  <span className="text-sm md:text-md text-light">Discord</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-sm md:text-md text-greyLight">Legal</span>
                  <span className="text-sm md:text-md text-light">Terms of service</span>
                  <span className="text-sm md:text-md text-light">Privacy Policy</span>
                  <span className="text-sm md:text-md text-light">Cookie Policy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-dark py-3 flex justify-center items-end">
            <span className="text-md text-greyLight">&copy; 2025 Valerie Attila Al-fath, All rights reserved.</span>
          </div>
        </div>
      </div>
    </>
  )
}