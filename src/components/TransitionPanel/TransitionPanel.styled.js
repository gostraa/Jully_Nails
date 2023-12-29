import styled from "styled-components";

export const MobileTranslation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const TraslationList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "slk ua ru";
  justify-content: stretch;
  align-content: stretch;
  justify-items: end;
  align-items: center;
`;

export const TraslationItem = styled.li``;

export const TraslationButton = styled.button`
  background-color: transparent;
  border: 0px;
`;
