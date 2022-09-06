import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 15px;
  padding: 15px 0;
  background-color: #FBFEEB;
  border-bottom: 1px solid rgba(150,150,150,0.75);
  box-shadow: 0px 5px 4px 0px rgba(150,150,150,0.75);
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
`;

export const Item = styled.li`
  list-style-type: none;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const MainLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #C70704;
  }
`;