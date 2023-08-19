import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import useProjectsArr from '@/hooks/useProjectsArr';
import useMediaQuery from '@/hooks/useMediaQuery';
import { AiOutlineLeftSquare, AiOutlineRightSquare } from "react-icons/ai";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const desktopStyles = "border-2 border-black shadow-opaque w-[85vw] md:w-4/5 md:h-full object-cover";
    const mobileStyles = "border-2 border-black shadow-opaque w-[20vw] md:w-[10vw] absolute left-[77vw] md:left-[69vw] object-cover";
    const { currentProject, pageNext, pagePrev } = useProjectsArr();

    return (
        <section
            id="projects"
            className='min-h-full pt-18 md:pt-12 flex flex-col items-center justify-center'
        >
            <motion.div
                className='md:w-4/5 h-5/6 flex flex-col md:flex-row justify-center items-center'
                onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
            >
                {/* DESKTOP PREV PROJ ARROW */}
                {isAboveMediumScreens && (
                    <button onClick={pagePrev}>
                        <AiOutlineLeftSquare className="w-12 h-12 hover:text-black" />
                    </button>
                )}
                {/* PROJECT */}
                <div
                    className='w-full flex flex-col justify-center items-center gap-4 md:pr-8'
                >
                    {/* PROJECT TITLE */}
                    <h1 className='text-3xl font-semibold md:text-4xl'>
                        {currentProject.title}
                    </h1>

                    {/* SKILLS ICONS */}
                    <div className='flex text-lg font-thin gap-2 text-black '>
                        {currentProject.icons.map((icon) => { return icon })}
                    </div>

                    {/* IMAGES */}
                    <div
                        className='w-full flex flex-col md:flex-row justify-center items-center'
                    >
                        <motion.img
                            key={currentProject.desktopImg}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: .8 }}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: -20
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0
                                }
                            }}
                            className={desktopStyles}
                            src={currentProject.desktopImg} alt={`${currentProject.title} desktop view`}
                        />
                        <motion.img
                            key={currentProject.mobileImg}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: .8 }}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: 10
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0
                                }
                            }}
                            className={mobileStyles}
                            src={currentProject.mobileImg} alt={`${currentProject.title} mobile view`}
                        />
                    </div>

                    {/* LINKS */}

                </div>

                {/* DESKTOP NEXT PROJ ARROW */}
                {isAboveMediumScreens && (
                    <button onClick={pageNext}>
                        <AiOutlineRightSquare className="w-12 h-12 hover:text-black" />
                    </button>
                )}

                {/* MOBILE PREV/NEXT PROJ ARROWS */}
                {!isAboveMediumScreens && (
                    <div className='flex gap-12 justify-center items-center pt-10'>
                        <button onClick={pagePrev}>
                            <AiOutlineLeftSquare className="w-12 h-12 hover:text-black" />
                        </button>
                        <button onClick={pageNext}>
                            <AiOutlineRightSquare className="w-12 h-12 hover:text-black" />
                        </button>
                    </div>
                )}
            </motion.div>
        </section>
    )
}

export default Projects