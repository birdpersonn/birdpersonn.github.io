import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from 'react-icons/si';

import PilatesDesktop from '@/assets/PilatesDesktop.png';
import PilatesMobile from '@/assets/PilatesMobile.webp';

import LibraryDesktop from '@/assets/LibraryDesktop.png';
import LibraryMobile from '@/assets/LibraryMobile.png';

import PortfolioDesktop from '@/assets/PortfolioDesktop.png';
import PortfolioMobile from '@/assets/PortfolioMobile.png';

import RPSDesktop from '@/assets/RockPaperScissorsDesktop.png';
import RPSMobile from '@/assets/RockPaperScissorsMobile.png';

const index = [
    {
        title: "Pilates Gym",
        demoLink: "https://pilates-site.pages.dev/",
        codeLink: "https://github.com/birdpersonn/pilates-site",
        desktopImg: PilatesDesktop,
        mobileImg: PilatesMobile,
        icons: [
            <SiVite key={'Vite'} title={'Vite'} />,
            <SiReact key={'React'} title={'React'} />,
            <SiTypescript key={'TypeScript'} title={'TypeScript'} />,
            <SiTailwindcss key={'Tailwind'} title={'Tailwind'} />,
        ]
    },
    {
        title: "Library",
        demoLink: "https://birdpersonn.github.io/library/",
        codeLink: "https://github.com/birdpersonn/library",
        desktopImg: LibraryDesktop,
        mobileImg: LibraryMobile,
        icons: [
            <SiReact key={'React'} title={'React'} />,
            <SiJavascript key={'JavaScript'} title={'JavaScript'} />,
            <SiTailwindcss key={'Tailwind'} title={'Tailwind'} />,
        ]
    },
    {
        title: "Portfolio",
        demoLink: "https://birdpersonn.github.io/library/",
        codeLink: "https://github.com/birdpersonn/library",
        desktopImg: PortfolioDesktop,
        mobileImg: PortfolioMobile,
        icons: [
            <SiVite key={'Vite'} title={'Vite'} />,
            <SiReact key={'React'} title={'React'} />,
            <SiTypescript key={'TypeScript'} title={'TypeScript'} />,
            <SiTailwindcss key={'Tailwind'} title={'Tailwind'} />,
        ]
    },
    {
        title: "Rock Paper Scissors",
        demoLink: "https://birdpersonn.github.io/rock-paper-scissors/",
        codeLink: "https://github.com/birdpersonn/rock-paper-scissors/",
        desktopImg: RPSDesktop,
        mobileImg: RPSMobile,
        icons: [
            <SiJavascript key={'JavaScript'} title={'JavaScript'} />,
            <SiHtml5 key={'HTML5'} title={'HTML5'} />,
            <SiCss3 key={'CSS3'} title={'CSS3'} />
        ]
    }
];

export default index;