import TransitionPanel from "components/TransitionPanel/TransitionPanel.jsx";
import "./App.styled.js";
import { useTranslation } from "react-i18next";
import Hero from "components/Hero/Hero.jsx";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("main")}</div>
      <TransitionPanel />
      <Hero />
    </>
  );
}

export default App;
