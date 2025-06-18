import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Bars3Icon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';
import ImageOne from "../assets/images/navImage1.jpg"
import ImageTwo from "../assets/images/navImage2.jpg"
import SettingIcon from "@mui/icons-material/Settings"
import CloseIcon from "@mui/icons-material/Close"
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	'& .MuiSwitch-switchBase': {
		margin: 1,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(22px)',
			'& .MuiSwitch-thumb:before': {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					'#fff',
				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
			},
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: '#aab4be',
				...theme.applyStyles('dark', {
					backgroundColor: '#8796A5',
				}),
			},
		},
	},
	'& .MuiSwitch-thumb': {
		backgroundColor: '#001e3c',
		width: 32,
		height: 32,
		'&::before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				'#fff',
			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
		},
		...theme.applyStyles('dark', {
			backgroundColor: '#003892',
		}),
	},
	'& .MuiSwitch-track': {
		opacity: 1,
		backgroundColor: '#aab4be',
		borderRadius: 20 / 2,
		...theme.applyStyles('dark', {
			backgroundColor: '#8796A5',
		}),
	},
}));

const Android12Switch = styled(Switch)(({ theme }) => ({
	padding: 8,
	'& .MuiSwitch-track': {
		borderRadius: 22 / 2,
		'&::before, &::after': {
			content: '""',
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			width: 16,
			height: 16,
		},
		'&::before': {
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
				theme.palette.getContrastText(theme.palette.primary.main),
			)}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
			left: 12,
		},
		'&::after': {
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
				theme.palette.getContrastText(theme.palette.primary.main),
			)}" d="M19,13H5V11H19V13Z" /></svg>')`,
			right: 12,
		},
	},
	'& .MuiSwitch-thumb': {
		boxShadow: 'none',
		width: 16,
		height: 16,
		margin: 2,
	},
}));

const IOSSwitch = styled((props) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 42,
	height: 26,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 2,
		transitionDuration: '300ms',
		'&.Mui-checked': {
			transform: 'translateX(16px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				backgroundColor: '#65C466',
				opacity: 1,
				border: 0,
				...theme.applyStyles('dark', {
					backgroundColor: '#2ECA45',
				}),
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
		'&.Mui-focusVisible .MuiSwitch-thumb': {
			color: '#33cf4d',
			border: '6px solid #fff',
		},
		'&.Mui-disabled .MuiSwitch-thumb': {
			color: theme.palette.grey[100],
			...theme.applyStyles('dark', {
				color: theme.palette.grey[600],
			}),
		},
		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: 0.7,
			...theme.applyStyles('dark', {
				opacity: 0.3,
			}),
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 22,
		height: 22,
	},
	'& .MuiSwitch-track': {
		borderRadius: 26 / 2,
		backgroundColor: '#E9E9EA',
		opacity: 1,
		transition: theme.transitions.create(['background-color'], {
			duration: 500,
		}),
		...theme.applyStyles('dark', {
			backgroundColor: '#39393D',
		}),
	},
}));

const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 28,
	height: 16,
	padding: 0,
	display: 'flex',
	'&:active': {
		'& .MuiSwitch-thumb': {
			width: 15,
		},
		'& .MuiSwitch-switchBase.Mui-checked': {
			transform: 'translateX(9px)',
		},
	},
	'& .MuiSwitch-switchBase': {
		padding: 2,
		'&.Mui-checked': {
			transform: 'translateX(12px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: '#1890ff',
				...theme.applyStyles('dark', {
					backgroundColor: '#177ddc',
				}),
			},
		},
	},
	'& .MuiSwitch-thumb': {
		boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
		width: 12,
		height: 12,
		borderRadius: 6,
		transition: theme.transitions.create(['width'], {
			duration: 200,
		}),
	},
	'& .MuiSwitch-track': {
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: 'rgba(0,0,0,.25)',
		boxSizing: 'border-box',
		...theme.applyStyles('dark', {
			backgroundColor: 'rgba(255,255,255,.35)',
		}),
	},
}));




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
	gsap.registerPlugin(useGSAP)
	useGSAP(() => {
		const menuSetting = document.querySelector(".menuSetting")

		gsap.set(menuSetting, {
			xPercent: 100,
			opacity: 0
		})

		let isSettingOpen = false

		function OpenSetting() {
			gsap.to(".menuSetting", {
				xPercent: 0,
				opacity: 1,
				duration: 0.4,
				ease: "power2.out"
			})

			isSettingOpen = !isSettingOpen
		}

		function CloseSetting() {
			gsap.to(".menuSetting", {
				xPercent: 100,
				opacity: 0,
				duration: 0.4,
				ease: "power2.out"
			})
			isSettingOpen = !isSettingOpen
		}

		const toggleSetting = document.querySelectorAll(".settingToggle")
		toggleSetting.forEach((toggle) => {
			toggle.addEventListener("click", () => {
				if (!isSettingOpen) {
					OpenSetting()
				} else {
					CloseSetting()
				}
			})
		})
	})

	return (
		<nav id='navbar' className="md:hidden fixed top-0 inset-x-0 w-full h-auto p-3 z-[11] mix-blend-normal">
			<div className="relative flex items-center justify-between">
				<div className="flex items-center">
					<span className='text-md text-dark pt-sans-bold-italic'>PORTFOLIO</span>
				</div>
				<div className="flex items-center space-x-4">
					<button className='settingToggle p-1'>
						<SettingIcon className="text-lg text-greyDark hover:text-greyLight transition-all" />
					</button>
					<button id='menuButton' className="text-neutral-800 hover:text-neutral-600 transition-all">
						<Bars3Icon className="menuIcon h-6 w-6" />
					</button>
				</div>

				<div className="menuSetting fixed z-[60] top-[4rem] right-0">
					<div className="p-[1px] bg-neutral-300 overflow-hidden rounded-s-2xl shadow-lg">
						<div className="w-full h-full flex flex-col gap-4 rounded-s-2xl bg-white p-4">
							<div className="w-full flex justify-between items-center">
								<span className='text-lg text-greyDark inter-medium'>Settings</span>
								<button className="settingToggle">
									<CloseIcon className='text-lg text-greyDark hover:text-greyLight transition-all' />
								</button>
							</div>
							<div className="w-full h-[2px] rounded-xl bg-neutral-300"></div>
							<div className="w-full grid gap-2">

								<FormGroup>
									<FormControlLabel
										control={<MaterialUISwitch sx={{ m: 1 }} />}
										label="Switch Theme"
									/>
								</FormGroup>

							</div>
						</div>
					</div>
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