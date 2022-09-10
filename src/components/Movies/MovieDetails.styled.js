import styled from "styled-components";

export const Details = styled.article`
  @media (min-width: 660px) {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    gap: 50px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 660px) {
    margin: 0;
  }
`;

export const MovieInfo = styled.div`
  text-align: justify;

  @media (min-width: 660px) {
    & h2 {
      margin-top: 0;
    }
  }

  @media (min-width: 1024px) {
    padding-right: 50px;
  }
`;