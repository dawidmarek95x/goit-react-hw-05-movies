import styled from "styled-components";

export const Item = styled.li`
  padding-bottom: 10px;
  border: 1px solid grey;
  border-radius: 15px;
  text-align: center;
  background-color: lightgray;
  overflow: hidden;

  & img {
    border-bottom: 1px solid grey;
  }

  & h3 {
    margin: 5px 0;
  }

  & p {
    margin: 0;
  }
`;