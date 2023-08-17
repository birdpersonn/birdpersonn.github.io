import { SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import CatDevImage from '@/assets/catDeveloper.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="home"
            className="pt-32 md:pt-0 md:h-full flex justify-center items-center"
        >
            <motion.div
                className="flex flex-col md:flex-row gap-8 justify-center items-center"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: .8 }}
                variants={{
                    hidden: {
                        opacity: 0,
                        y: -50
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    }
                }}
            >
                <div
                    className="w-11/12 md:w-2/5"
                >
                    <h1
                        className="font-semibold text-2xl md:text-3xl"
                    >
                        const CHANEL = frontendDev
                    </h1>
                    <h2
                        className="border-2 border-black shadow-opaque bg-white p-4"
                    >
                        hi, welcome! my name is chanel and i'm a life-long learner passionate about programming, art, and education.
                        although i enjoy exploring the endless ways to express myself through code
                        (ask me about my charmander project), i have ultimately found a love for
                        web development, which utilizes both the creative and problem-solving sides
                        of my brain.
                    </h2>
                </div>
                <img src={CatDevImage} alt="cat developer" className="w-4/5 md:w-[350px] md:h-[350px]" />
            </motion.div>
        </section>
    )
}

export default index