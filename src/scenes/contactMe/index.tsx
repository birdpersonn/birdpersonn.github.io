import { SelectedPage } from "@/shared/types"
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactMe = ({ setSelectedPage }: Props) => {
    const inputStyles = `border-2 border-black bg-purple-light p-2 w-11/12 text-purple-dark md:text-lg`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: React.FormEvent) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section
            id="contactme"
            className="min-h-full pt-28 md:pt-12 flex justify-center items-center"
        >
            <motion.div
                className="flex flex-col gap-4 justify-center items-center"
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: .8 }}
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 50
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    }
                }}
            >
                <h1 className="text-4xl font-semibold text-black">CONTACT ME</h1>

                <form
                    className="flex flex-col bg-white gap-6 py-4 mb-6 justify-center items-center border-2 border-black shadow-opaque"
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/be0a2bf19d66f90579aab6bf033a8dd2"
                    method="POST"
                >
                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                    {errors.name && (
                        <p className="text-accent-orange">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max length is 100 characters."}
                        </p>
                    )}

                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="EMAIL"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p className="text-accent-orange">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}

                    <textarea
                        className={inputStyles}
                        placeholder="MESSAGE"
                        rows={6}
                        cols={35}
                        {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })}
                    />
                    {errors.message && (
                        <p className="text-accent-orange">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="p-3 font-semibold text-xl border-2 border-transparent transition duration-500 hover:border-black hover:shadow-opaque"
                    >
                        SUBMIT
                    </button>
                </form>
            </motion.div>
        </section >
    )
}

export default ContactMe