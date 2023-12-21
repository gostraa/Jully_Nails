import TransitionPanel from "components/TransitionPanel/TransitionPanel.jsx";
import "./App.styled.js";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("main")}</div>
      <TransitionPanel />
    </>
  );
}

export default App;
