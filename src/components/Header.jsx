import { useState } from "react";
import { useTheme } from "../themeProvider";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import "../i18n";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { href: "#home", label: t("header.linkHome") },
    { href: "#about", label: t("header.linkAbout") },
    { href: "#services", label: t("header.linkServices") },
    { href: "#contact", label: t("header.linkContact") },
    { href: "#projects", label: t("header.linkProjects") },
  ];

  return (
    <>
      <div className="sm:px-8 px-4 py-2 z-10 w-full bg-white dark:bg-dark-900 text-dark-900 dark:text-white flex items-center justify-between gap-2">
        <div className="flex items-center justify-center">
          <a
            className="logo flex flex-col items-center justify-center text-2xl"
            href="/"
          >
            <span>MANAUS</span>
            <span>DIGITAL</span>
          </a>
        </div>
        <div className=" gap-5 text-xl hidden lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="hover:text-gray-400"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            className="w-full h-8 text-2xl"
            onClick={() => changeLanguage("en")}
          >
            🇺🇸
          </button>
          <button
            className="w-full h-8 text-2xl"
            onClick={() => changeLanguage("pt")}
          >
            🇧🇷
          </button>
          <button
            className="w-full h-8 text-white bg-dark-900 rounded hover:bg-slate-700"
            onClick={toggleTheme}
          >
            Tema
          </button>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? (
              <AiOutlineClose className="text-4xl" />
            ) : (
              <RxHamburgerMenu className="text-4xl" />
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="fixed top-0 right-0 left-0 bottom-0 bg-white dark:bg-dark-900 text-dark-900 dark:text-white">
            <ul className="flex flex-col items-center justify-center h-full">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a className="hover:text-gray-400" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
