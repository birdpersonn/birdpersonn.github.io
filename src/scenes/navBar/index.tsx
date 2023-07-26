import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import Link from "./Link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMenu } from "react-icons/hi";
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
            <div className="flex items-center justify-between fixed top-0 z-30 w-full px-2 py-6">

                {/* NAME */}
                <AnchorLink
                    className="pl-4 pr-12"
                    href={"#home"}
                    onClick={() => setSelectedPage(SelectedPage.Home)}
                >
                    <h1 className='text-3xl'>
                        CHANEL
                    </h1>
                </AnchorLink>

                {isAboveMediumScreens ? (
                    /* LINKS AND CTA */
                    < div className="flex items-center justify-between w-full">
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
                            <Link
                                page="Contact Me"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>

                        {/* CTA */}
                        <div>
                            <button
                                className="rounded-md px-6 py-1 duration-300 hover:bg-purple-dark hover:text-white"
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
        </nav >
    )
}

export default NavBar