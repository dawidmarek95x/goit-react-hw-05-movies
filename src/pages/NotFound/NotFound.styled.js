import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  text-align: center;
`;

export const Bold = styled.b`
  font-size: 64px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #157FE9;

  &:hover,
  &:focus {
    color: #D5428C;
  }
`;