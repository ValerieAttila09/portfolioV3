import { ArrowDownIcon, ArrowDownTrayIcon, BarsArrowDownIcon, EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const skills = [
	{
		id: 1,
		title: "UI/UX Design",
		classes: ":w-full flex flex-col gap-[4rem] bg-black rounded-md p-5 border border-greyDark hover:shadow-xl hover:shadow-black hover:-translate-y-2 transition-all",
		description: "I an expert in creating a website design, starting from e-commerce websites, portfolios, and others. i will help you if you need design assistance.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-yellow-600">
			<path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
		</svg>)
	},
	{
		id: 2,
		classes: "w-full flex flex-col gap-[4rem] bg-black rounded-md p-5 border border-greyDark hover:shadow-xl hover:shadow-black hover:-translate-y-2 transition-all",
		title: "Troubleshooting & Bugs",
		description: "Address technical issues and systematically identify bugs to ensure the stability and optimal performance of the system.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-red-600">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
		</svg>)
	},
	{
		id: 3,
		classes: "w-full flex flex-col gap-[4rem] bg-black rounded-md p-5 border border-greyDark hover:shadow-xl hover:shadow-black hover:-translate-y-2 transition-all",
		title: "Creative & Visual Thinking",
		description: "Developing original and aesthetic design concepts with a strategic visual approach to enhance appeal and user experience.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-blue-500">
			<path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
		</svg>)
	},
	{
		id: 4,
		classes: "w-full flex flex-col gap-[4rem] bg-black rounded-md p-5 border border-greyDark hover:shadow-xl hover:shadow-black hover:-translate-y-2 transition-all",
		title: "Database Management",
		description: "Managing the structure and integrity of data efficiently with a reliable database system to support the performance and scalability of applications.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
			<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
		</svg>)
	}
]

export function About() {

	useGSAP(() => {

	})

	return (
		<div className="w-full h-auto py-[5rem]">
			<div className="w-full px-6 grid lg:grid-cols-6 gap-4 md:gap-[3rem] py-[5rem]">
				<div className="w-full lg:col-span-3">
					<span className="text-lg text-greyLight">Who am i?</span>
					<h1 className="text-5xl md:text-6xl pt-sans-bold text-light pe-4">Meet Valerie Attila Al-fath</h1>
					<h1 className="text-2xl pt-sans-bold text-greyLight mb-4">Software Engineering</h1>
					<span className="text-lg text-neutral-300 text-wrap">
						I am Valerie Attila Al-Fath, a UI/UX designer and back-end developer based in Medan, Indonesia. I have a strong passion for creating intuitive digital experiences and building efficient, scalable systems. With a focus on both aesthetics and functionality, I am dedicated to delivering high-quality solutions and am always ready to contribute to impactful projects.
					</span>
					<div className="w-full flex justify-start items-center gap-4 my-4">
						<div className="size-10 hover:bg-greyDark hover:shadow-xl transition-all bg-dark rounded-full flex justify-center items-center">
							<EnvelopeIcon className="size-6 text-light" />
						</div>
						<div className="size-10 hover:bg-greyDark hover:shadow-xl transition-all bg-dark rounded-full flex justify-center items-center">
							<PhoneIcon className="size-5 text-light" />
						</div>
						<div className="size-10 hover:bg-greyDark hover:shadow-xl transition-all bg-dark rounded-full flex justify-center items-center">
							<UserIcon className="size-5 text-light" />
						</div>
					</div>
				</div>
				<div className="w-full lg:col-span-3">
					<div className="shadow-xl shadow-black w-full md:w-4/5 md:mx-auto rounded-2xl p-[1px] h-auto overflow-hidden bg-gradient-to-br from-greyLight via-dark to-dark">
						<div className="w-full h-full bg-gradient-to-br from-greyDark to-dark rounded-2xl flex flex-col gap-2">
							<div className="w-full h-auto flex justify-between items-center p-5">
								<h1 className="text-xl text-secondaryLight">Commited</h1>
								<div className="rounded-full p-[1px] bg-gradient-to-br from-greyLight via-greyDark/50 to-transparent overflow-hidden shadow-md shadow-dark">
									<button className="hover:bg-dark transition-all w-full h-full rounded-full px-2 py-1 bg-neutral-800 text-sm text-neutral-400 flex items-center gap-2">
										<span className="text-nowrap">Last 30 days</span>
										<BarsArrowDownIcon className="text-greyLight size-4" />
									</button>
								</div>
							</div>
							<div className="w-full h-[14rem] grid grid-cols-9 gap-2 p-5">
								<div className="flex flex-col items-center justify-end gap-1">
									<div className="h-1/2 w-full hover:bg-purple-900 transition-all bg-purple-400 rounded-tr-md rounded-tl-md"></div>
									<span className="text-[10px] text-greyLight">JAN</span>
								</div>
								<div className="flex flex-col items-center justify-end gap-1">
									<div className="h-2/5 w-full hover:bg-purple-900 transition-all bg-purple-400 rounded-tr-md rounded-tl-md"></div>
									<span className="text-[10px] text-greyLight">FEB</span>
								</div>
								<div className="flex flex-col items-center justify-end gap-1">
									<div className="h-1/3 w-full hover:bg-purple-900 transition-all bg-purple-400 rounded-tr-md rounded-tl-md"></div>
									<span className="text-[10px] text-greyLight">MAR</span>
								</div>
								<div className="flex flex-col items-center justify-end gap-1">
									<div className="h-3/5 w-full hover:bg-purple-900 transition-all bg-purple-400 rounded-tr-md rounded-tl-md"></div>
									<span className="text-[10px] text-greyLight">APR</span>
								</div>
								<div className="flex flex-col items-center justify-end gap-1">
									<div className="h-4/7 w-full hover:bg-purple-900 transition-all bg-purple-400 rounded-tr-md rounded-tl-md"></div>
									<span className="text-[10px] text-greyLight">MAY</span>
								</div>
								<div className="flex flex-col items-center justify-end gap-1">
									<span className="text-md text-secondaryLight">1.87K</span>
									<div className="h-3/4 w-full hover:bg-purple-900 transition-all bg-purple-700 rounded-tr-md rounded-tl-md"></div>
									<span className="text-[10px] text-greyLight">JUN</span>
								</div>
								<div className="flex flex-col items-center justify-end gap-1">
									<div className="h-7/11 w-full hover:bg-purple-900 transition-all bg-purple-400 rounded-tr-md rounded-tl-md"></div>
									<span className="text-[10px] text-greyLight">JUL</span>
								</div>
								<div className="flex flex-col items-center justify-end gap-1">
									<div className="h-2/9 w-full hover:bg-purple-900 transition-all bg-purple-400 rounded-tr-md rounded-tl-md"></div>
									<span className="text-[10px] text-greyLight">AUG</span>
								</div>
								<div className="flex flex-col items-center justify-end gap-1">
									<div className="h-2/3 w-full hover:bg-purple-900 transition-all bg-purple-400 rounded-tr-md rounded-tl-md"></div>
									<span className="text-[10px] text-greyLight">SEP</span>
								</div>
							</div>
							<div className="w-full h-full pt-4 pb-[2rem]">
								<div className="flex flex-wrap items-center justify-center gap-6">
									<div className="flex flex-col items-center">
										<h1 className="text-3xl sg-thin text-secondaryLight">8.37K</h1>
										<span className="text-[9px] text-greyLight">CODE LINE ADDED</span>
									</div>
									<div className="flex flex-col items-center">
										<h1 className="text-3xl sg-thin text-secondaryLight">87</h1>
										<span className="text-[9px] text-greyLight">COMMITED CHANGE</span>
									</div>
									<div className="flex flex-col items-center">
										<h1 className="text-3xl sg-thin text-secondaryLight">+19.7%</h1>
										<span className="text-[9px] text-greyLight">VS LAST MONTH</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full grid gap-5">
				<div className="w-full p-6 relative flex">
					<div className="w-full flex flex-col gap-2 md:pe-[8rem]">
						<h1 className="text-5xl md:text-6xl text-light pt-sans-bold">Skills</h1>
						<span className="text-lg text-neutral-300">As a web Developer & Designer, I specialize in building modern, responsive, and interactive user interfaces. I am proficient in HTML, CSS and Javascript, with hands-on experience using React JS to develop modular and efficient web applications.</span>
					</div>
				</div>
				<div className="w-full grid md:grid-cols-2 gap-5 px-6 md:ps-6 md:pe-[4rem]">

					{skills.map((skill) => (
						<div className="hover:-translate-y-2 hover:shadow-2xl transition-all shadow-lg shadow-black w-full h-[14rem] md:mx-auto rounded-2xl p-[1px] overflow-hidden bg-gradient-to-br from-greyLight via-dark to-dark">
							<div className="overflow-hidden w-full h-full p-5 bg-gradient-to-br from-greyDark to-dark rounded-2xl flex flex-col gap-2">

								<div className="w-full flex justify-between items-center gap-5">
									<h1 className="text-4xl text-light inter-semibold">{skill.title}</h1>
									{skill.icon}
								</div>

								<div className="w-full h-full flex flex-col justify-end">
									<p className="text-md text-secondaryLight">{skill.description}</p>
								</div>
								
							</div>
						</div>
					))}

				</div>
			</div>
		</div>
	)
}