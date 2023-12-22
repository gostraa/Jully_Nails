import React from "react";

import TranslationPanel from "components/TransitionPanel/TransitionPanel";

import useWindowWidth from "hooks/useWindowWidth";

import {
  BurgerMenu,
  HeaderContainer,
  LogoContainer,
  LogoSVG,
} from "./Header.styled";

const Header = () => {
  const windowWidth = useWindowWidth();

  return (
    <HeaderContainer>
      <LogoContainer>
        {windowWidth === "isMobile" && <BurgerMenu />}
        <LogoSVG />
      </LogoContainer>

      <TranslationPanel />
    </HeaderContainer>
  );
};

export default Header;
