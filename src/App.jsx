import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className=" min-h-screen dark:bg-[#111827] transition-colors">
      <NavBar theme={theme} handleToggleTheme={handleToggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
