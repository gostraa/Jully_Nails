import React from "react";

import TranslationPanel from "components/TransitionPanel/TransitionPanel";
import ModalBurger from "components/ModalBurger/ModalBurger";

import useWindowWidth from "hooks/useWindowWidth";
import useToggleModal from "hooks/useToggleModal";

import {
  BurgerMenu,
  HeaderContainer,
  LogoContainer,
  LogoSVG,
} from "./Header.styled";

const Header = () => {
  const windowWidth = useWindowWidth();

  const { isOpen, openModal, handleKeyDown, closeModal, handleBackdropClick } =
    useToggleModal();

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          {windowWidth === "isMobile" && (
            <BurgerMenu onClick={() => openModal()} />
          )}
          <LogoSVG />
        </LogoContainer>
        <TranslationPanel />
      </HeaderContainer>
      {isOpen && (
        <ModalBurger
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Header;
