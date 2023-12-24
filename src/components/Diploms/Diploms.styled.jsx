import styled from "styled-components";

export const DiplomsSection = styled.section`
  width: 320px;
  margin: 0 auto;
  padding: 0 60px 60px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 216px 80px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 60px 120px;
  }
`;

export const DiplomsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const DiplomThumb = styled.div`
  width: 193px;
  height: 100%;
  padding: 4px;
  border: 1px solid rgba(160, 94, 92, 0.8);

  img {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 320px;
  }

  @media (min-width: 1280px) {
    width: 366px;
  }
`;
