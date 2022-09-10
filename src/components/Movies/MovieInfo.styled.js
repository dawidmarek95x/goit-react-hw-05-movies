import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;

  & li {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

export const InfoLink = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 14px;
  text-decoration: none;
  color: white;
  background-color: black;
  cursor: pointer;

  &:hover,
  &:focus {
    font-weight: 600;
    background-color: #B30303;
    box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;
    transition: background-color 500ms;
  }
`;