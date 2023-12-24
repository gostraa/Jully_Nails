import { useTranslation } from "react-i18next";
import Hero from "components/Hero/Hero.jsx";
import Header from "components/Header/Header.jsx";

import Manikure from "components/Manicure/Manikure.jsx";
import { NailShapes } from "components/NailShapes/NailShapes";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Hero t={t} />
      <Manikure t={t} />
      <NailShapes t={t} />
    </>
  );
}

export default App;
