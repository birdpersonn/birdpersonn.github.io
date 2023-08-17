import NavBar from "@/scenes/navBar";
import Home from "@/scenes/home";
import Skills from "@/scenes/skills";
import Projects from "@/scenes/projects";
import ContactMe from "@/scenes/contactMe";
import { SelectedPage } from "./shared/types";
import { useEffect, useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Skills setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <ContactMe setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
