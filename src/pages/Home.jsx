import Lottie from "react-lottie";
import animationData from "../lottie/web.json";
import { useTranslation } from "react-i18next";
import "../i18n";
import Particulas from "../particles";
import Header from "../components/Header";

function Home() {
  const { t } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
            {t("home.slogan")}
          </p>
        </div>
        <div>
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </div>
    </div>
  );
}

export default Home;
