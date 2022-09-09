import styled from "styled-components";

export const Img = styled.img`
  display: block;
  max-width: ${props => props.maxWidth ?? "300px"};
  width: 100%;
`;