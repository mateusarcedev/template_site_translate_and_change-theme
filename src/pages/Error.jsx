import { useRouteError } from "react-router-dom";
import errorImage from "/img/error.svg";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <div className="w-60 h-60">
        <img src={errorImage} alt="" />
      </div>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
