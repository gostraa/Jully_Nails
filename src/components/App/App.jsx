import { useTranslation } from "react-i18next";

import Hero from "components/Hero/Hero.jsx";
import Header from "components/Header/Header.jsx";
import Manikure from "components/Manicure/Manikure.jsx";
import { NailShapes } from "components/NailShapes/NailShapes";
import Diploms from "components/Diploms/Diploms";
import Reviews from "components/Reviews/Reviews";
import Price from "components/Price/Price";
import Footer from "components/Footer/Footer";

import { Background } from "./App.styled";
import Preload from "components/Preload/Preload";

function App() {
  const { t } = useTranslation();

  return (
    <Background>
      <Header />
      <Hero t={t} />
      <Preload />
      <Manikure t={t} />
      <NailShapes t={t} />
      <Price t={t} />
      <Diploms t={t} />
      <Reviews t={t} />
      <Footer t={t} />
    </Background>
  );
}

export default App;
