import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (min-width: 1280px) {
    gap: 60px;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  line-height: normal;
`;
