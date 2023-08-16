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
                className="flex flex-col md:flex-row justify-center items-center align-middle"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                <motion.div
                    className="flex flex-col justify-center items-center md:w-2/5 mx-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: -50
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                >
                    <h1
                        className="self-start font-extrabold text-3xl"
                    >
                        const CHANEL = frontendDev
                    </h1>
                    <h2
                        className="border-black border-2 p-6 bg-white text-lg"
                    >
                        hi, welcome! my name is chanel and i'm a life-long learner passionate about programming, art, and education.
                        although i enjoy exploring the endless ways to express myself through code
                        (ask me about my charmander project), i have ultimately found a love for
                        web development, which utilizes both the creative and problem-solving sides
                        of my brain.
                    </h2>
                </motion.div>
                <img src={CatDevImage} alt="cat developer" className="w-[350px] h-[350px]" />
            </motion.div>
        </section>
    )
}

export default index