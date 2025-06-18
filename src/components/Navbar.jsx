import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Bars3Icon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';
import ImageOne from "../assets/images/navImage1.jpg"
import ImageTwo from "../assets/images/navImage2.jpg"

export function NavbarDesktop() {
	gsap.registerPlugin(useGSAP)
	useGSAP(() => {

		let isOpen = false;

		gsap.set('#menuNavbar', {
			yPercent: -180,
		});
		gsap.set('.circle1', {
			xPercent: 180,
		});
		gsap.set('.circle2', {
			xPercent: -180,
		});
		gsap.set(".menuMobile", {
			clipPath: "inset(100% 0% 0% 0%)",
		})
		gsap.set("#navbar", {
			background: "#f7f7f7"
		})

		const openMenu = () => {
			isOpen = !isOpen;
			gsap.to('#menuNavbar', {
				yPercent: 0,
				duration: 0.8,
				ease: 'power2.inOut',
				onStart: () => {
					document.querySelector(".menuIcon").classList.add("text-light")
					gsap.to("#navbar", {
						background: "transparent",
						duration: 0.4,
						ease: "power2.out",
						delay: 0.2,
					})
				},
				onComplete: () => {
					gsap.to(".circle1", {
						xPercent: 0,
						duration: 0.4,
						ease: "power2.out",
					})
					gsap.to(".circle2", {
						xPercent: 0,
						duration: 0.4,
						ease: "power2.out",
					})
					gsap.to(".menuMobile", {
						clipPath: "inset(0% 0% 0% 0%)",
						duration: 0.4,
					})
				}
			});
		}
		const closeMenu = () => {
			isOpen = !isOpen;
			gsap.to('#menuNavbar', {
				yPercent: -100,
				duration: 0.8,
				ease: 'power2.inOut',
				onStart: () => {
					document.querySelector(".menuIcon").classList.remove("text-light")
					gsap.to("#navbar", {
						background: "#f7f7f7",
						duration: 0.4,
						ease: "power2.out",
						delay: 0.2,
					})
					gsap.to(".circle1", {
						xPercent: 100,
						duration: 0.4,
						ease: "power2.in",
					})
					gsap.to(".circle2", {
						xPercent: -100,
						duration: 0.4,
						ease: "power2.in",
					})
					gsap.to(".menuMobile", {
						clipPath: "inset(100% 0% 0% 0%)",
						duration: 0.4
					})
				},
			});
		}

		const toggleMenu = () => {
			if (!isOpen) {
				openMenu();
			} else {
				closeMenu();
			}
		}

		const menuToggle = document.getElementById('menuButton');
		menuToggle.addEventListener('click', toggleMenu);

		const navbarMenu = document.querySelectorAll('.menuMobile');
		navbarMenu.forEach((menuItem) => {
			menuItem.addEventListener("click", closeMenu)
		});
	})

	return (
		<>
			<nav className="hidden md:block fixed top-0 inset-x-auto w-full h-auto px-6 py-4 bg-transparent z-10">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<div className='flex items-center gap-2 p-2 rounded-lg bg-greyDark/70 backdrop-blur-sm hover:bg-greyLight/70 transition-all'>
							<svg className='size-5' xmlns="http://www.w3.org/2000/svg" fill="#f7f7f7" viewBox="0 0 192 192" data-name="Layer 1"><path d="M0 0h192v192H0z" style={{ fill: "none" }} /><circle cx="28.97" cy="96" r="12.97" /><circle cx="62.49" cy="62.49" r="12.97" /><circle cx="96" cy="28.97" r="12.97" /><circle cx="62.49" cy="129.51" r="12.97" /><circle cx="96" cy="96" r="12.97" /><circle cx="129.51" cy="62.49" r="12.97" /><circle cx="96" cy="163.03" r="12.97" /><circle cx="129.51" cy="129.51" r="12.97" /><circle cx="163.03" cy="96" r="12.97" /></svg>
							<span className='text-md text-white pt-sans-bold-italic'>Valerie</span>
						</div>
					</div>
					<div className="flex items-center space-x-1 bg-dark/70 px-1 backdrop-blur-sm py-1 rounded-full">
						<a href="#home" className="text-white text-lg px-4 py-1 rounded-full hover:bg-greyLight/60 transition-all">Home</a>
						<a href="#about" className="text-white text-lg px-4 py-1 rounded-full hover:bg-greyLight/60 transition-all">About</a>
						<a href="#project" className="text-white text-lg px-4 py-1 rounded-full hover:bg-greyLight/60 transition-all">Projects</a>
						<a href="#contact" className="text-white text-lg px-4 py-1 rounded-full hover:bg-greyLight/60 transition-all">Contact</a>
					</div>
					<div className="flex justify-center items-center">
						<button className='p-2 rounded-full bg-greyDark/70 backdrop-blur-sm hover:bg-greyLight/70 transition-all'>
							<UserIcon className='size-6 text-light' />
						</button>
					</div>

				</div>
			</nav>
		</>
	);
}

export function NavbarMobile() {
	return (
		<nav id='navbar' className="md:hidden fixed top-0 inset-x-0 w-full h-auto p-3 z-[11] mix-blend-normal">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<span className='text-md text-dark pt-sans-bold-italic'>PORTFOLIO</span>
				</div>
				<div className="flex items-center space-x-4">
					<button id='menuButton' className="text-neutral-800 hover:text-neutral-600 transition-all">
						<Bars3Icon className="menuIcon h-6 w-6" />
					</button>
				</div>
			</div>
		</nav>
	);
}

export function NavbarMenuMobile() {

	return (
		<div className='md:hidden'>

			<div id='menuNavbar' className="fixed inset-0 z-10">
				<div className="w-full h-full relative bg-light overflow-hidden">
					<div className="w-1/2 h-1/2 absolute bg-light top-0 left-0">
						<div className="my-8 w-full h-full flex flex-col gap-4 px-5 py-6">
							<div className="relative w-full overflow-hidden">
								<a onMouseEnter={() => {
									gsap.to(".dash1", {
										width: "100%",
										duration: 0.3,
										ease: "power2.out"
									})
								}} onMouseLeave={() => {
									gsap.to(".dash1", {
										width: "0%",
										duration: 0.3,
										ease: "power2.out"
									})
								}} href="#home" className='menuMobile text-3xl flex flex-col items-start text-dark hover:text-greyLight transition-all'>
									<span>HOME</span>
									<div className="dash1 w-0 h-[2px] bg-greyLight"></div>
								</a>
							</div>
							<div className="relative w-full overflow-hidden">
								<a onMouseEnter={() => {
									gsap.to(".dash2", {
										width: "100%",
										duration: 0.3,
										ease: "power2.out"
									})
								}} onMouseLeave={() => {
									gsap.to(".dash2", {
										width: "0%",
										duration: 0.3,
										ease: "power2.out"
									})
								}} href="#about" className='menuMobile text-3xl flex flex-col items-start text-dark hover:text-greyLight transition-all'>
									<span className='text-nowrap'>ABOUT ME</span>
									<div className="dash2 w-0 h-[2px] bg-greyLight"></div>
								</a>
							</div>
							<div className="relative w-full overflow-hidden">
								<a onMouseEnter={() => {
									gsap.to(".dash3", {
										width: "100%",
										duration: 0.3,
										ease: "power2.out"
									})
								}} onMouseLeave={() => {
									gsap.to(".dash3", {
										width: "0%",
										duration: 0.3,
										ease: "power2.out"
									})
								}} href="#project" className='menuMobile text-3xl flex flex-col items-start text-dark hover:text-greyLight transition-all'>
									<span>PROJECTS</span>
									<div className="dash3 w-0 h-[2px] bg-greyLight"></div>
								</a>
							</div>
							<div className="relative w-full overflow-hidden">
								<a onMouseEnter={() => {
									gsap.to(".dash4", {
										width: "100%",
										duration: 0.3,
										ease: "power2.out"
									})
								}} onMouseLeave={() => {
									gsap.to(".dash4", {
										width: "0%",
										duration: 0.3,
										ease: "power2.out"
									})
								}} href="#contact" className='menuMobile text-3xl flex flex-col items-start text-dark hover:text-greyLight transition-all'>
									<span>CONTACT</span>
									<div className="dash4 w-0 h-[2px] bg-greyLight"></div>
								</a>
							</div>
						</div>
					</div>
					<div className="w-1/2 h-1/2 circle1 absolute overflow-hidden bg-dark top-0 right-0 rounded-bl-[10rem]">
						<div className="relative w-full h-full">
							<img src={ImageOne} className='object-cover w-full h-full' alt="" />
						</div>
					</div>
					<div className="w-1/2 h-1/2 circle2 absolute overflow-hidden bg-dark bottom-0 left-0 rounded-tr-[10rem]">
						<div className="relative w-full h-full">
							<img src={ImageTwo} className='object-cover w-full h-full' alt="" />
						</div>
					</div>
					<div className="w-1/2 h-1/2 absolute bg-light bottom-0 right-0">
						<div className="w-full h-full flex justify-start items-end px-5 py-3">
							<span className='copyright text-2xl text-dark'>&copy; 2025. <span className='text-greyDark'>Valerie Attila Al-fath</span></span>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}