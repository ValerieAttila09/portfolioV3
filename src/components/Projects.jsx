import { ProjectsData } from "../data"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Projects() {
	gsap.registerPlugin(useGSAP)

	return (
		<div className="w-full py-[2rem]">
			<div className="w-full h-auto my-10 py-10">
				<div className="w-full p-3 md:py-3 md:ps-3">
					<div className="w-full flex flex-col gap-3">
						<h1 className='text-5xl md:text-6xl pt-sans-bold text-dark'>My Project</h1>
						<span className='text-lg text-greyDark'>I have created several projects, although there are still some shortcomings in my previous projects, but I will update my projects again.</span>
					</div>
				</div>

				<div className="w-full grid md:grid-cols-2 gap-5 p-3">


					{ProjectsData.map((project) => {
						return (
							<div className="md:w-full mx-auto md:mx-0 h-auto rounded-lg bg-white hover:shadow-xl transition-all">
								<div className="w-full h-full grid gap-2">
									<div className="h-7/10 w-full p-2">
										<div className="rounded-md overflow-hidden">
											<img src={project.image} className="projectImage h-[18rem] w-full object-cover brightness-75 saturate-50 hover:saturate-100 hover:brightness-100 transition-all" alt="" />
										</div>
									</div>
									<div className="h-3/10 w-full p-4">
										<h1 className="projectTitle text-4xl md:text-3xl inter-bold text-dark">{project.projectTitle}</h1>
										<span className="projectDescription text-md text-greyDark">{project.projectDescription}</span>
									</div>
								</div>
							</div>
						)
					})}

				</div>
			</div>
		</div>
	)
} 