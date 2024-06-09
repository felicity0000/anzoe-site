import { useEffect, useState } from "react";
import AC from "../assets/AC.jpg";


const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="relative container flex justify-center mb-32 w-full p-4 top-0 left-0 right-0 border border-transparent rounded-lg shadow-2xl items-center sticky z-50 dark:bg-slate-950 bg-slate-300 bg-opacity-60 backdrop-blur-lg">
      <div className="h-8 w-8">
        <a href="#hero"><img src={AC} className="rounded-full"/></a>
      </div>
      <div className="space-x-4">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <button
          className="bg-transparent dark:bg-transparent"
          onClick={handleThemeSwitch}
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </button>
        <a
          href="#service"
          className="font-poppins text-gray-800 dark:text-slate-500 hover:font-semibold"
        >
          Services
        </a>
        {/* <a
          href="#projects"
          className="font-poppins text-gray-800 dark:text-slate-500 hover:font-semibold"
        >
          Projects
        </a> */}
        <a
          href="#about"
          className="font-poppins text-gray-800 dark:text-slate-500 hover:font-semibold"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
