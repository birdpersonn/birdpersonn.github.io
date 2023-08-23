import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import useProjectsArr from '@/hooks/useProjectsArr';
import useMediaQuery from '@/hooks/useMediaQuery';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const linkStyles = "p-2 m-4 bg-white border-2 border-black font-semibold hover:border-black hover:shadow-opaque";
    const arrowStyles = "w-12 h-12 bg-white border-2 border-black hover:text-black hover:shadow-opaque";

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
                        <AiOutlineLeft className={arrowStyles} />
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
                            className="border-2 border-black shadow-opaque w-[85vw] md:w-4/5 md:h-full object-cover"
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
                            className="border-2 border-black shadow-opaque w-[20vw] absolute object-cover 
                                left-[77vw] md:left-[69vw] md:w-[10vw]"
                            src={currentProject.mobileImg} alt={`${currentProject.title} mobile view`}
                        />
                    </div>

                    {/* LINKS */}

                    <div className='flex justify-center items-center gap-4'>
                        {/* MOBILE PREV PROJ ARROWS */}
                        {!isAboveMediumScreens && (
                            <button onClick={pagePrev}>
                                <AiOutlineLeft className={arrowStyles} />
                            </button>

                        )}
                        <a href={currentProject.demoLink} target='_blank' className={linkStyles}>DEMO</a>
                        <a href={currentProject.codeLink} target='_blank' className={linkStyles}>CODE</a>
                        {/* MOBILE PREV/NEXT PROJ ARROWS */}
                        {!isAboveMediumScreens && (<button onClick={pageNext}>
                            <AiOutlineRight className={arrowStyles} />
                        </button>)}
                    </div>
                </div>

                {/* DESKTOP NEXT PROJ ARROW */}
                {isAboveMediumScreens && (
                    <button onClick={pageNext}>
                        <AiOutlineRight className={arrowStyles} />
                    </button>
                )}
            </motion.div>
        </section >
    )
}

export default Projects