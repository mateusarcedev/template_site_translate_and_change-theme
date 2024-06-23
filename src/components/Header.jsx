import { useState, useEffect } from "react";
import { useTheme } from "../themeProvider";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { CiSun } from "react-icons/ci"; // Ícone para o tema claro
import { WiMoonAltWaningCrescent1 } from "react-icons/wi"; // Ícone para o tema escuro
import "../i18n";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [themeIcon, setThemeIcon] = useState(<WiMoonAltWaningCrescent1 />); // Estado para o ícone do botão

  // Função para mudar o idioma
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  // Atualiza o ícone do botão baseado no tema atual
  useEffect(() => {
    setThemeIcon(theme === "dark" ? <CiSun /> : <WiMoonAltWaningCrescent1 />);
  }, [theme]);

  const navLinks = [
    { href: "#home", label: t("header.linkHome") },
    { href: "#services", label: t("header.linkServices") },
    { href: "#contact", label: t("header.linkContact") },
    { href: "#projects", label: t("header.linkProjects") },
  ];

  return (
    <>
      <div className="sm:px-8 px-4 py-4 z-10 w-full bg-white dark:bg-dark-900 text-dark-900 dark:text-white flex items-center justify-between gap-2">
        <div className="flex items-center justify-center">
          <a
            className="logo flex flex-col items-center justify-center text-2xl"
            href="/"
          >
            <span>LOGO</span>
          </a>
        </div>
        <div className="gap-5 text-xl hidden lg:flex">
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
          <div className="flex items-center">
            <select
              className="ml-2 p-1 border rounded bg-white text-black"
              value={selectedLanguage}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Botão com ícone que muda conforme o tema */}
          <button
            className="w-full h-8 flex items-center justify-center text-2xl text-black dark:text-white rounded hover:bg-slate-700"
            onClick={toggleTheme}
          >
            {themeIcon}
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
