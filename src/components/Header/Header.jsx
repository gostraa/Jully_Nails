import { AnimatePresence } from "framer-motion";

import TranslationPanel from "components/TransitionPanel/TransitionPanel";
import ModalBurger from "components/ModalBurger/ModalBurger";
import Navbar from "components/Navbar/Navbar";

import useWindowWidth from "hooks/useWindowWidth";
import useToggleModal from "hooks/useToggleModal";

import {
  BurgerMenu,
  HeaderContainer,
  LogoContainer,
  LogoSVG,
  Background,
} from "./Header.styled";

const Header = () => {
  const windowWidth = useWindowWidth();

  const { isOpen, openModal, handleKeyDown, closeModal, handleBackdropClick } =
    useToggleModal();

  return (
    <>
      <Background>
        <HeaderContainer>
          <LogoContainer>
            {windowWidth === "isMobile" && (
              <BurgerMenu onClick={() => openModal()} />
            )}
            <LogoSVG />
            <div></div>
          </LogoContainer>
          {windowWidth !== "isMobile" && <Navbar />}
          <TranslationPanel />
        </HeaderContainer>
      </Background>
      <AnimatePresence>
        {isOpen && (
          <ModalBurger
            handleKeyDown={handleKeyDown}
            handleBackdropClick={handleBackdropClick}
            closeModal={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
