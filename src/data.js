import viteLogo from './assets/images/Vitejs-logo.svg.png';
import reactLogo from './assets/images/reactjs.svg';
import tailwindLogo from './assets/images/Tailwind_CSS_Logo.svg.png';
import gsapLogo from './assets/images/gsap-greensock.svg';
import PortfolioV1 from "./assets/images/portfolioV1.png"
import PortfolioV2 from "./assets/images/portfolioV2.png"
import Asus from "./assets/images/asus.png"
import School from "./assets/images/school.jpg"

export const Madewith = [
  {
    id: 1,
    name: 'Vite',
    classes: 'text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-violet-500',
    image: viteLogo,
  },
  {
    id: 2,
    name: 'React JS',
    classes: 'text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-500',
    image: reactLogo,
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    classes: 'text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500',
    image: tailwindLogo,
  },
  {
    id: 4,
    name: 'GSAP',
    classes: 'text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500',
    image: gsapLogo,
  }
];

export const ProjectsData = [
  {
    id: 1,
    projectTitle: "Portfolio V1",
    projectDescription: "This is my first Portfolio. Although the design is not very good and attractive, but it makes me proud.",
    image: PortfolioV1,
    link: "https://valerieattila09.github.io/portfolio/"
  },
  {
    id: 2,
    projectTitle: "School Project",
    projectDescription: "This is my school project entitled The Impact of Indonesia's Geograpghical Location In the form of a website.",
    image: School,
    link: "https://valerieattila09.github.io/dampakGeografisIndonesia/"
  },
  {
    id: 3,
    projectTitle: "ASUS ProArt Laptop",
    projectDescription: "At first i made this webiste because i was bored. I don't know i thought of making this website, but this one is pretty good",
    image: Asus,
    link: "https://valerieattila09.github.io/ProArt-Laptop/"
  },
  {
    id: 4,
    projectTitle: "Portfolio V2",
    projectDescription: "And here is my second portfolio website. From here i started to be proficient in using GSAP and i started intersted in website animations with GSAP.",
    image: PortfolioV2,
    link: "https://valerieattila09.github.io/portfolioV2/"
  },
]
