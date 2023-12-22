import Hero from "components/Hero/Hero.jsx";
import Header from "components/Header/Header.jsx";

import { MainContainer } from "./App.styled.js";

function App() {
  return (
    <MainContainer>
      <Header />
      <Hero />
    </MainContainer>
  );
}

export default App;
