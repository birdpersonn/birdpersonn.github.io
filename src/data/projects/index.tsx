import {
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from 'react-icons/si';

import PilatesDesktop from '@/assets/PilatesDesktop.webp';
import PilatesMobile from '@/assets/PilatesMobile.webp';

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
];

export default index;