import { SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import CatDevImage from '@/assets/catDeveloper.jpg';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="home"
            className="flex bg-cat-purple pt-28 md:py-0 md:h-full"
        >
            <motion.div
                className="flex flex-col md:flex-row justify-center items-center items-between align-middle"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                <div
                    className="flex flex-col justify-center items-center mx-12"
                >
                    <h1
                        className="self-start font-extrabold text-4xl"
                    >
                        const CHANEL = frontendDev
                    </h1>
                    <h2
                        className="border-black border-2 p-6 bg-white"
                    >
                        hi, welcome! my name is chanel and i'm a life-long learner passionate about programming, art, and education.
                        although i enjoy exploring the endless ways to express myself through code
                        (ask me about my charmander project), i have ultimately found a love for
                        web development, which utilizes both the creative and problem-solving sides
                        of my brain.
                    </h2>
                </div>
                <img src={CatDevImage} alt="cat developer" className="w-[350px] h-[350px]" />
            </motion.div>
        </section>
    )
}

export default index