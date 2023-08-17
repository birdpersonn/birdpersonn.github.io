import { SelectedPage } from "@/shared/types"
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactMe = ({ setSelectedPage }: Props) => {
    const inputStyles = `border-2 border-black p-2 w-11/12`;

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
            className="pt-20 h-full px-12 flex flex-col gap-4 justify-center items-center"
        >
            <h1 className="text-4xl font-semibold">CONTACT ME</h1>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: .8 }}
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 100
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    }
                }}
            >
                <form
                    className="flex flex-col gap-6 py-4 justify-center items-center align-center border-2 border-black shadow-opaque"
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
                        <p className=" text-primary-500">
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
                        <p className=" text-primary-500">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}

                    <textarea
                        className={inputStyles}
                        placeholder="MESSAGE"
                        rows={8}
                        cols={35}
                        {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })}
                    />
                    {errors.message && (
                        <p className=" text-primary-500">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="py-3 font-semibold text-xl pb-6 transition duration-500 hover:text-white"
                    >
                        SUBMIT
                    </button>
                </form>
            </motion.div>
        </section >
    )
}

export default ContactMe