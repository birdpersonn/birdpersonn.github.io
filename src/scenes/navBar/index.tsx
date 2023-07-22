// import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import Link from "./Link";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
    // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <nav>
            <div className="flex items-center justify-between w-full">

                {/* NAME */}
                <AnchorLink
                    href={"#home"}
                    onClick={() => setSelectedPage(SelectedPage.Home)}
                >
                    <h1 className='text-3xl'>
                        CHANEL
                    </h1>
                </AnchorLink>

                {/* LINKS AND CTA*/}
                <div className="flex items-center justify-between w-full">
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
                    <div className="flex px-14 py-2">
                        <button>Let's Connect!</button>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar