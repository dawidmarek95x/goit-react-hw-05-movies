import styled from "styled-components";

export const MovieDetailsSection = styled.section`
  padding: 10px 20px;

  & button {
    margin-bottom: 10px;
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 14px;
    color: white;
    background-color: black;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #B30303;
      box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;
      transition: background-color 400ms;
    }
  }
`;