import { ThemeProvider } from "./themeProvider";
import "./i18n";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-dark-900 bg-slate-200 h-screen">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
