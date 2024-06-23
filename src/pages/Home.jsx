import { useTranslation } from "react-i18next";
import "../i18n";
import Particulas from "../particles";
import Header from "../components/Header";
import { FaGithub } from "react-icons/fa";


function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <Particulas />
      <div className="w-full h-[720px] flex items-center justify-center flex-wrap">
        <div className="w-1/2">
          <h1 className="sm:text-sm md:text-md lg:text-6xl font-bold dark:text-white text-dark-900 pb-4">
            {t("home.title")}
          </h1>
          <p className="dark:text-white text-2xl text-dark-900">
            {t("home.text")}
          </p>
          <div className="w-full flex justify-center">
            <a href="https://github.com/mateusarcedev/template_site_translate_and_change-theme">
              <button className="dark:text-white text-2xl w-80 h-16 flex items-center justify-center gap-5 text-dark-900 my-5 bg-slate-100 dark:bg-slate-700 rounded-md hover:bg-gray-500">
                <FaGithub />
                {t("button.github")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
