import styled from "styled-components";

import { ReactComponent as Cross } from "images/svg/cross.svg";

export const BackdropModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  overscroll-behavior: contain;
  background: rgba(34, 13, 91, 0.23);
`;

export const CrossButton = styled(Cross)``;
