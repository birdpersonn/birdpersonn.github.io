import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import useProjectsArr from '@/hooks/useProjectsArr';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage }: Props) => {
    const desktopStyles = "border-2 border-black shadow-opaque w-[85vw] md:w-[50vw]";
    const mobileStyles = "border-2 border-black shadow-opaque w-[20vw] md:w-[10vw] absolute left-[77vw] md:left-[70vw]";
    const { currentProject, pageNext, pagePrev } = useProjectsArr();

    return (
        <section
            id="projects"
            className='min-h-full pt-32 md:pt-12 flex flex-col items-center justify-center'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
            >
                {/* PROJECT */}
                <div
                    className='flex flex-col justify-center items-center gap-4'
                >
                    {/* PROJECT TITLE */}
                    <h1 className='text-3xl font-semibold md:text-4xl'>
                        {currentProject.title}
                    </h1>

                    {/* SKILLS ICONS */}
                    <div className='flex text-xl gap-2'>
                        {currentProject.icons.map((icon) => { return icon })}
                    </div>

                    {/* IMAGES */}
                    <div
                        className='flex flex-col md:flex-row justify-center items-center gap-8'
                    >
                        <motion.img
                            className={desktopStyles}
                            src={currentProject.desktopImg} alt={`${currentProject.title} desktop view`}
                        />
                        <motion.img
                            className={mobileStyles}
                            src={currentProject.mobileImg} alt={`${currentProject.title} mobile view`}
                        />
                    </div>

                    {/* LINKS */}
                </div>

                {/* BUTTONS */}
                <div className='flex gap-4 justify-center items-center pt-8'>
                    <button
                        onClick={pagePrev}
                    >
                        {'<'}
                    </button>
                    <button
                        onClick={pageNext}
                    >
                        {'>'}
                    </button>
                </div>
            </motion.div>
        </section>
    )
}

export default Projects