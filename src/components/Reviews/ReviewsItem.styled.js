import styled from "styled-components";

export const Review = styled.li`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: -1px -1px 1px 0px black, 1px 1px 1px 0px black, -1px 1px 1px 0px black, 1px -1px 1px 0px black;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & h3 {
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
  }

  & p {
    margin-bottom: 0;
    text-align: justify;
  }
`;