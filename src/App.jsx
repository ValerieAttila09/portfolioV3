import { NavbarDesktop, NavbarMobile, NavbarMenuMobile } from './components/Navbar'
import { Header } from "./components/Header"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from './components/Contact'
import { Footer } from "./components/Footer"
import { Entrance } from './components/Entrance'
import { ScrollAnimation } from './components/ScrollAnimation'

const App = () => {

	return (
		<div className="w-full bg-secondaryLight">
			<Entrance/>

			{/* Navbar */}
			<div>
				<NavbarDesktop />
				<NavbarMobile />
				<NavbarMenuMobile />
			</div>

			{/* Header */}
			<div id='home' className='md:px-[4rem]'>
				<Header />
			
			</div>
			{/* Animation */}
			<div id='animation'>
				<ScrollAnimation />
			</div>

			{/* About */}
			<div id='about' className='relative md:px-[6rem] bg-dark'>
				<About />
			</div>

			{/* Projects */}
			<div id='project' className='relative p-2 md:px-[6rem]'>
				<Projects />
			</div>


			{/* Contact */}
			<div id='contact' className='p-2 md:px-[6rem]'>
				<Contact />
			</div>

			{/* Footer */}
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default App