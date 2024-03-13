import { useTheme } from "../themeProvider";
import { useTranslation } from "react-i18next";
import "../i18n";

function Header() {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="h-16 bg-white dark:bg-dark-900 text-dark-900 dark:text-white flex items-center justify-between gap-2 p-5">
      <div className="h-full flex items-center justify-center">
        <a
          className="logo flex flex-col items-center justify-center text-2xl"
          href="/"
        >
          <span>MANAUS</span>
          <span>DIGITAL</span>
        </a>
      </div>
      <div className="flex gap-5 text-xl">
        <a className="hover:text-gray-400" href="#home">
          {t("header.linkHome")}
        </a>
        <a className="hover:text-gray-400" href="">
          {t("header.linkAbout")}
        </a>
        <a className="hover:text-gray-400" href="">
          {t("header.linkServices")}
        </a>
        <a className="hover:text-gray-400" href="">
          {t("header.linkContact")}
        </a>
        <a className="hover:text-gray-400" href="">
          {t("header.linkProjects")}
        </a>
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
      </div>
    </div>
  );
}

export default Header;
