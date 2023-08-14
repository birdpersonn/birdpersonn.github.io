import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import Link from "./Link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    return (
        <nav>
            <div className="fixed flex items-center justify-between top-0 z-30 w-full 
                px-8 pt-4 pb-6 border-b-2 border-black">

                {/* NAME */}
                <AnchorLink
                    className="p-2 font-bold border-2 border-black shadow-opaque 
                        transition duration-300 hover:shadow-none hover:text-black"
                    href={"#home"}
                    onClick={() => setSelectedPage(SelectedPage.Home)}
                >
                    <h1 className='text-3xl'>
                        CHANEL
                    </h1>
                </AnchorLink>

                {isAboveMediumScreens ? (
                    /* LINKS AND CTA */
                    < div className="flex items-center justify-between w-full px-8">
                        {/* LINKS */}
                        <div className="flex justify-between items-center gap-8">
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Experience"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>

                        {/* CTA */}
                        <div>
                            <button
                                className="border-2 border-black shadow-opaque px-6 py-1 
                                    transition duration-300 hover:shadow-none hover:text-black"
                            >
                                Let's Connect!
                            </button>
                        </div>
                    </div>) : (
                    <button
                        className="px-4"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <HiMenu className="w-6 h-6" />
                    </button>)}
            </div>

            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 top-5 z-40 w-3/5 bg-purple-light drop-shadow-2xl rounded-md">
                    <div className="flex justify-end py-2 px-6">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <HiX className="w-6 h-6" />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="flex flex-col items-end justify-center m-4 gap-8 text-2xl">
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Experience"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact Me"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav >
    )
}

export default NavBar