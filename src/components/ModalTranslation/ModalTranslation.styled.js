import styled from "styled-components";

export const BackdropModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  overscroll-behavior: contain;
  background: var(--burger-modal);
`;

export const Modal = styled.div`
  padding: 12px;
  position: absolute;
  top: 40px;
  right: calc(50% - 142px);
  display: flex;
  flex-direction: column;
  border-radius: 12px 0px 12px 12px;
  background-color: var(--light-white);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  gap: 10px;

  @media (min-width: 768px) {
    padding: 20px;
    top: 60px;
    right: calc(50% - 345px);
  }
`;

export const Translation = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
