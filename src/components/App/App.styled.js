import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 15px;
  padding: 12px 0;
  background: linear-gradient(to left, #333333, #B72D2D);
  border-bottom: 1px solid rgba(200,200,200,0.75);
  box-shadow: 0px 5px 3px 0px rgba(80,80,80,0.75);
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 20px;
`;

export const Item = styled.li`
  list-style-type: none;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const MainLink = styled(NavLink)`
  box-sizing: border-box;
  appearance: none;
  background: linear-gradient(to left, #485563, #29323c);
  border: 1px solid gray;
  border-radius: 0.6em;
  color: white;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  box-shadow: 0 0 5px 5px $blue inset, 0 0 0 0 #FD1515;
  transition: all 150ms ease-in-out;
  
  &:hover,
  &:focus {
    outline: 0;
    box-shadow: -2px -2px 0 0 silver inset, 2px 2px 0 0 silver inset;
    transition: box-shadow 500ms;
  }

  &.active {
    color: #FF2828;
  }
`;