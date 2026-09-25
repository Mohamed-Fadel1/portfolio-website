import { useState } from "react";
import navLinks from "./NavbarLinks";
import { Moon, Sun } from "lucide-react";

const NavBar = ({ handleToggleTheme, theme }) => {
  const [active, setActive] = useState(navLinks[0]?.name);

  const handleActive = (name) => {
    setActive(name);
  };

  return (
    <nav
      className="fixed bottom-2 inset-x-2 md:inset-x-0 mx-auto max-w-3xl rounded-2xl py-1 px-0 md:px-4 
      bg-white/90 dark:bg-gray-900  z-20
      backdrop-blur-lg 
      border border-gray-200 dark:border-white/10 
      shadow-xl shadow-gray-300/50 dark:shadow-black/40 
      transition-colors duration-300"
    >
      <ul className="flex items-center justify-around">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.path}
              onClick={() => handleActive(link.name)}
              className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-lg 
                transition-all duration-200 font-bold 
                ${
                  active === link.name
                    ? "text-violet-600 dark:text-white bg-violet-100 dark:bg-white/20"
                    : "text-gray-500 dark:text-gray-300 hover:text-violet-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
            >
              <span>{link.icon}</span>
              <span className="text-xs">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={handleToggleTheme}
        className="absolute -top-3 -right-3 bg-white dark:bg-gray-800 
          text-gray-800 dark:text-yellow-300
          w-7 h-7 rounded-full flex items-center justify-center 
          shadow-lg shadow-gray-400/40 dark:shadow-black/50 
          border border-gray-200 dark:border-white/20
          cursor-pointer hover:scale-110 transition-transform duration-200"
      >
        {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
      </button>
    </nav>
  );
};

export default NavBar;
