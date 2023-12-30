import styled from "styled-components";

import mobileBackground from "images/background/BG320.png";
import mobileBackground2 from "images/background/BG768.png";
import mobileBackground3 from "images/background/BG1280.png";

export const Background = styled.main`
  background: url(${mobileBackground}) no-repeat center top;
  background-size: 100%;

  @media (min-width: 768px) {
    background: url(${mobileBackground2}) no-repeat center top;
    background-size: 100%;
  }

  @media (min-width: 1280px) {
    background: url(${mobileBackground3}) no-repeat center top;
    background-size: 100%;
  }
`;
