import { Madewith } from "../data"
import SplitText from "../textAnimation/SplitText/SplitText";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)

const handleAnimationComplete = () => {
	console.log('All letters have animated!');
};

const Text = () => {
	return (
		<h1 className='text-6xl pt-sans-bold text-wrap text-start'>WEB DESIGNER & DEVELOPER</h1>
	)
}

export function Header() {
	useGSAP(() => {
		gsap.fromTo(".bili", {
			opacity: 0, 
			yPercent: 20,
		}, {
			opacity: 1,
			yPercent: 0,
			duration: 0.5,
			stagger: 0.2,
			ease: "power2.out",
			delay: 1.6,
		})
	})

	return (
		<>
			<div className='md:my-[9rem] lg:flex lg:gap-[6rem] lg:my-10'>
				<div className="w-full h-[26rem] md:h-[36rem] flex flex-col gfap-5 p-4">
					<div className="w-full h-1/2 flex items-end">
						<div className="flex flex-col items-start justify-center gap-2">
							<SplitText 
								text={Text()}
								duration={0.3} 
								ease="power3.out"
								splitType="chars" 
								from={{ opacity: 0, y: 10 }} 
								to={{ opacity: 1, y: 0 }} 
								threshold={0.05} 
								rootMargin="-100px" 
								onLetterAnimationComplete={handleAnimationComplete} 
							/>
						</div>
					</div>
					<div className="bili w-full h-1/2 flex flex-col gap-4 p-2">
						<span className='text-xl text-greyDark'>A vocational high school student majoring in software engineering. Skilled in designing and developing a website.</span>
					  <a href="#about">
							<button className='w-[12rem] text-light text-lg rounded-full bg-dark px-4 py-2 hover:bg-greyLight transition-all'>About Me</button>
						</a>
						<br />
					</div>
				</div>

				<div className='bili md:my-10 w-full h-[14rem] md:h-[20rem] flex justify-center items-center'>
					<div className="w-full relative h-auto">
						<div className="absolute max-w-md flex flex-col inset-x-5 md:inset-x-0 shadow-xl hover:-translate-y-[1rem] hover:shadow-2xl transition-all">
							<div className="w-full rounded-tr-md rounded-tl-md bg-neutral-800 flex justify-between">
								<div className="w-1/3 flex justify-start items-center gap-1 px-4 py-2">
									<div className="size-2 rounded-full bg-green-500"></div>
									<div className="size-2 rounded-full bg-yellow-500"></div>
									<div className="size-2 rounded-full bg-red-500"></div>
								</div>
								<div className="w-2/3 flex justify-start items-center p-2">
									<span className='text-sm text-light'><code>valerie.json</code></span>
								</div>
							</div>
							<div className="w-full rounded-br-md rounded-bl-md overflow-hidden bg-dark h-auto">
								<div className="w-full flex justify-start items-start">
									<div className="w-[2rem] flex flex-col pt-1 pb-5 px-1 bg-greyDark gap-[2.5px]">
										<span className='text-sm text-greyLight px-2'><code>1</code></span>
										<span className='text-sm text-greyLight px-2'><code>2</code></span>
										<span className='text-sm text-greyLight px-2'><code>3</code></span>
										<span className='text-sm text-greyLight px-2'><code>4</code></span>
										<span className='text-sm text-greyLight px-2'><code>5</code></span>
										<span className='text-sm text-greyLight px-2'><code>6</code></span>
										<span className='text-sm text-greyLight px-2'><code>7</code></span>
									</div>
									<div className="w-full">
										<div className="w-full h-auto px-2">
											<span className='text-sm text-nowrap text-light'><code className='text-greyLight'>// Valerie's Data</code></span>
											<br />
											<span className='text-sm text-nowrap text-light'><code className='text-yellow-400'>{`{`}</code></span>
											<br />
											<span className='text-sm text-nowrap text-light pl-4'><code><span className='text-green-400'>"name"</span>: <span className='text-teal-500'><SplitText text={"\"Valerie\""} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" onLetterAnimationComplete={handleAnimationComplete} /></span>,</code></span>
											<br />
											<span className='text-sm text-nowrap text-light pl-4'><code><span className="text-green-400">"major"</span>: <span className="text-teal-500"><SplitText text={"\"Software Engineering\""} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" onLetterAnimationComplete={handleAnimationComplete} /></span>,</code></span>
											<br />
											<span className='text-sm text-nowrap text-light pl-4'><code><span className="text-green-400">"profession"</span>: <span className="text-teal-500"><SplitText text={"\"Web Designer & Developer\""} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" onLetterAnimationComplete={handleAnimationComplete} /></span>,</code></span>
											<br />
											<span className='text-sm text-nowrap text-light pl-4'><code><span className='text-green-400'>"skills"</span>: <span className='text-yellow-500'>[</span><span className='text-teal-500'><SplitText text={"\"HTML\""} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" onLetterAnimationComplete={handleAnimationComplete} /></span>, <span className='text-teal-500'><SplitText text={"\"Tailwind CSS\""} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" onLetterAnimationComplete={handleAnimationComplete} /></span>, <span className='text-teal-500'><SplitText text={"\"JS\""} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" onLetterAnimationComplete={handleAnimationComplete} /></span><span className='text-yellow-500'>]</span></code></span>
											<br />
											<span className='text-sm text-nowrap text-light'><code className='text-yellow-400'>{`}`}</code></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bili w-full my-[12rem] md:my-[6rem]">
				<div className="w-full flex justify-center items-center p-4">
					<h1 className='text-3xl text-dark'>Made with</h1>
				</div>
				<div className="w-full flex flex-wrap justify-center items-center gap-[1.7rem] p-4">
					{Madewith.map((made) => (
						<div className='flex items-center gap-3'>
							<img key={made.id} src={made.image} className='h-10 w-auto' alt="" />
							<span className={made.classes}>{made.name}</span>
						</div>
					))}
				</div>
			</div>
		</>
	)
}