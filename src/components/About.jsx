import { BarsArrowDownIcon } from "@heroicons/react/24/outline"
import PhoneIcon from "@mui/icons-material/Call"
import MailIcon from "@mui/icons-material/Mail"
import UserIcon from "@mui/icons-material/Person"
import Bug from "@mui/icons-material/BugReport"
import UiUx from "@mui/icons-material/Architecture"
import Desktop from "@mui/icons-material/DesignServices"
import Database from "@mui/icons-material/DataArray"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);

const skills = [
	{
		id: 1,
		title: "UI/UX Design",
		classes: ":w-full flex flex-col gap-[4rem] bg-black rounded-md p-5 border border-greyDark hover:shadow-xl hover:shadow-black hover:-translate-y-2 transition-all",
		description: "I an expert in creating a website design, starting from e-commerce websites, portfolios, and others. i will help you if you need design assistance.",
		icon: (<UiUx className="text-lg text-purple-400" />)
	},
	{
		id: 2,
		classes: "w-full flex flex-col gap-[4rem] bg-black rounded-md p-5 border border-greyDark hover:shadow-xl hover:shadow-black hover:-translate-y-2 transition-all",
		title: "Troubleshooting & Bugs",
		description: "Address technical issues and systematically identify bugs to ensure the stability and optimal performance of the system.",
		icon: (<Bug className="text-lg text-purple-400" />)
	},
	{
		id: 3,
		classes: "w-full flex flex-col gap-[4rem] bg-black rounded-md p-5 border border-greyDark hover:shadow-xl hover:shadow-black hover:-translate-y-2 transition-all",
		title: "Creative & Visual Thinking",
		description: "Developing original and aesthetic design concepts with a strategic visual approach to enhance appeal and user experience.",
		icon: (<Desktop className="text-lg text-purple-400" />)
	},
	{
		id: 4,
		classes: "w-full flex flex-col gap-[4rem] bg-black rounded-md p-5 border border-greyDark hover:shadow-xl hover:shadow-black hover:-translate-y-2 transition-all",
		title: "Database Management",
		description: "Managing the structure and integrity of data efficiently with a reliable database system to support the performance and scalability of applications.",
		icon: (<Database className="text-lg text-purple-400" />)
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
							<MailIcon className="size-6 text-light" />
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
						<div className="hover:-translate-y-2 hover:shadow-2xl transition-all shadow-lg shadow-black w-full h-[16rem] md:mx-auto rounded-2xl p-[1px] overflow-hidden bg-gradient-to-br from-greyLight via-dark to-dark">
							<div className="overflow-hidden w-full h-full p-5 bg-gradient-to-br from-greyDark to-dark rounded-2xl flex flex-col gap-2">

								<div className="w-full flex justify-between items-center gap-5">
									<div className="w-2/3">
										<h1 className="text-4xl text-light inter-regular">{skill.title}</h1>
									</div>
									<div className="1/3 flex justify-center items-center">
										{skill.icon}
									</div>
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