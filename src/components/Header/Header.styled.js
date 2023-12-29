import styled from "styled-components";

import { ReactComponent as Burger } from "images/svg/burger.svg";
import { ReactComponent as Logo } from "images/svg/logo.svg";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 320px;
  padding: 16px 16px 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    border-top: 1px solid var(--header-border);
    border-bottom: 1px solid var(--header-border);
    margin-top: 32px;
    width: 768px;
    padding: 16px 40px 40px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 32px 60px 24px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const BurgerMenu = styled(Burger)`
  cursor: pointer;
`;

export const LogoSVG = styled(Logo)`
  width: 35px;
  height: 24px;
`;
