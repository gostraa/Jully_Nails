import styled from "styled-components";

import { ReactComponent as Burger } from "images/svg/burger.svg";
import { ReactComponent as Logo } from "images/svg/logo.svg";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  width: 320px;
  padding: 16px 16px 20px;
  margin: 0 auto;

  background: transparent;

  & > :nth-child(2) {
    margin-left: 100px;
  }

  & > :last-child {
    margin-left: auto;
  }

  @media (min-width: 768px) {
    border-top: 1px solid var(--header-border);
    border-bottom: 1px solid var(--header-border);
    width: 768px;
    padding: 16px 40px;
    background: var(--light-white);
  }

  @media (min-width: 1280px) {
    margin-top: 32px;
    width: 1280px;
    padding: 32px 60px 24px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
    position: relative;
    gap: 0px;

    & ::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: var(--header-line);
    }

    & ::after {
      right: -50px;
    }
  }
`;

export const BurgerMenu = styled(Burger)`
  cursor: pointer;
`;

export const LogoSVG = styled(Logo)`
  width: 35px;
  height: 24px;

  @media (min-width: 768px) {
    width: 80px;
    height: 54px;
  }

  @media (min-width: 1280px) {
    width: 100;
    height: 68px;
  }
`;
