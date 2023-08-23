import { SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import { SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiWebpack } from "react-icons/si";
import { TbBrandVscode } from 'react-icons/tb';
import { FaGithubAlt, FaJava } from 'react-icons/fa';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="skills"
            className="h-full pt-32 md:pt-0 flex flex-col items-center justify-center bg-cat-purple gap-4"
        >
            <h1 className="text-4xl font-semibold text-black">SKILLS</h1>
            <motion.div
                className="flex w-full flex-col md:flex-row gap-6 items-center justify-center"
                onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
            >
                <motion.div
                    className="border-2 border-black p-4 bg-white text-4xl w-5/6 md:w-1/4"
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
                >
                    <div className="flex gap-4 justify-center items-center">
                        <SiJavascript className="w-6 h-6" />
                        javascript
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <SiTypescript className="w-6 h-6" />
                        typescript
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <SiReact className="w-6 h-6" />
                        react
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <SiHtml5 className="w-6 h-6" />
                        html5
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <SiCss3 className="w-6 h-6" />
                        css3
                    </div>
                </motion.div>
                <motion.div
                    className="border-2 border-black p-4 bg-white text-4xl w-5/6 md:w-1/4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: .8 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: 20
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                >
                    <div className="flex gap-4 justify-center items-center">
                        tailwind
                        <SiTailwindcss className="w-6 h-6" />
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        webpack
                        <SiWebpack className="w-6 h-6" />
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        github
                        <FaGithubAlt className="w-6 h-6" />
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        vscode
                        <TbBrandVscode className="w-6 h-6" />
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        java
                        <FaJava className="w-6 h-6" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default index