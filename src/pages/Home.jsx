import Lottie from "react-lottie";
import animationData from "../lottie/web.json";
import { useTranslation } from "react-i18next";
import "../i18n";
import Particulas from "../particles";

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
    <div id="home" className="flex items-center justify-between flex-wrap p-60">
      <Particulas />
      <div className="flex w-1/2 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold dark:text-white text-dark-900 pb-4">
          {t("home.title")}
        </h1>
        <p className="dark:text-white text-2xl text-dark-900">
          {t("home.slogan")}
        </p>
      </div>
      <div className="flex h-full items-center justify-center">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
}

export default Home;
