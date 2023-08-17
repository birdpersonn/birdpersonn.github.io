import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import PilatesDesktop from '@/assets/PilatesDesktop.webp';
import PilatesMobile from '@/assets/PilatesMobile.webp';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ setSelectedPage }: Props) => {
    const desktopStyles = "border-2 border-black shadow-opaque w-[450px]";
    const mobileStyles = "border-2 border-black shadow-opaque h-[200px] absolute left-2/3";

    return (
        <section
            id="projects"
            className='min-h-full pt-32 md:pt-12 flex flex-col items-center justify-center'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
            >
                <div
                    className='flex flex-col md:flex-row justify-center items-center gap-8'
                >
                    <img
                        className={desktopStyles}
                        src={PilatesDesktop} alt="pilates desktop view" />
                    <img
                        className={mobileStyles}
                        src={PilatesMobile} alt="pilates mobile view" />
                </div>
            </motion.div>
        </section>
    )
}

export default index