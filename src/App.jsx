import "./App.css";
import { LanguageProvider } from "./Context/LanguageContext";
import Dock from "./components/Dock";
import Header from "./components/Header";
import Starfield from "./components/Starfield";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <>
      <LanguageProvider>
        <Starfield />
        <Header></Header>
        <Dock></Dock>
        <AppRoutes />
      </LanguageProvider>
    </>
  );
}

export default App;
