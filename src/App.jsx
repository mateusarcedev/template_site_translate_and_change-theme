import { ThemeProvider } from "./themeProvider";
import "./i18n";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-dark-900 bg-slate-200 h-screen">
        <Home />
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
