import styled from "styled-components";

import { ReactComponent as Cross } from "images/svg/cross.svg";

export const BackdropModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  overscroll-behavior: contain;
  background: var(--burger-modal);
`;

export const CrossButton = styled(Cross)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const BurgerMenu = styled.div`
  position: absolute;
  width: 180px;
  height: 145px;
  left: calc(50% - 143px);
  top: 15px;
  border-radius: 0px 24px 24px;
  background-color: var(--light-white);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 24px;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const MenuItem = styled.li`
  cursor: pointer;
`;
