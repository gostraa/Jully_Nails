import styled from "styled-components";
import { ReactComponent as GlobeSVG } from "images/svg/global.svg";

export const MobileTranslation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & :first-child {
    margin-right: 4px;
  }

  & :last-child {
    margin-left: 2px;
  }
`;

export const TraslationList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 16px;
  grid-template-areas: "slk ua ru";
  justify-content: stretch;
  align-content: stretch;
  justify-items: end;
  align-items: center;
`;

export const TraslationButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: 0px;
  font-size: 10px;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    opacity: 0.5;

    &:disabled {
      opacity: 1;
      color: var(--primary-text-color);
    }
  }
`;

export const Globe = styled(GlobeSVG)`
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
