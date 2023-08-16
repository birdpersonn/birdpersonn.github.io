import { SelectedPage } from "@/shared/types"
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const index = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="contactme"
            className="mx-auto min-h-full justify-center items-center flex flex-col bg-cat-purple 
            pt-28 md:pt-0 gap-10"
        >
            <motion.div
                className=""
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
            >
                contact
            </motion.div>
        </section>
    )
}

export default index