import styled from "styled-components";

export const PriceContainer = styled.section`
  width: 320px;
  margin: 0 auto 60px;

  @media (min-width: 768px) {
    width: 768px;
    margin: 0 auto 80px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto 120px;
  }
`;

export const PriceTitle = styled.h2`
  text-align: center;
  font-family: Marck Script;
  font-size: 24px;
  line-height: normal;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }

  @media (min-width: 1280px) {
    font-size: 56px;
    margin-bottom: 40px;
  }
`;

export const ServiceItem = styled.li`
  border-top: 1px solid var(--header-border);
  border-bottom: 1px solid var(--header-border);
  padding: 10px 16px;
  width: 288px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 688px;
    padding: 16px;
  }

  @media (min-width: 1280px) {
    width: 964px;
  }
`;

export const Service = styled.span`
  max-width: 190px;
  font-size: 14px;
  line-height: normal;

  @media (min-width: 768px) {
    max-width: 100%;
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const PriceItem = styled.span`
  font-size: 14px;
  line-height: normal;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;
