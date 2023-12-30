import styled from "styled-components";

import { ReactComponent as LogoSVG } from "images/svg/logo.svg";

export const FooterBackground = styled.footer`
  background: var(--grey);
`;

export const FooterContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 30px 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 40px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 24px 60px;
    align-items: center;
  }
`;

export const Logo = styled(LogoSVG)`
  width: 60px;
  height: 41px;

  @media (min-width: 768px) {
    width: 100px;
    height: 67px;
  }

  @media (min-width: 1280px) {
    width: 66px;
    height: 45px;
  }
`;

export const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 60px;
  }
`;

export const FooterNavItem = styled.li`
  color: var(--footer-black);
  font-size: 12px;
  line-height: normal;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
