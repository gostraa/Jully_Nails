import Hero from "components/Hero/Hero.jsx";
import Header from "components/Header/Header.jsx";

import { MainContainer } from "./App.styled.js";
import Manikure from "components/Manicure/Manikure.jsx";

function App() {
  return (
    <>
      {" "}
      <MainContainer>
        <Header />
      </MainContainer>
      <Hero />
      <Manikure />
    </>
  );
}

export default App;
