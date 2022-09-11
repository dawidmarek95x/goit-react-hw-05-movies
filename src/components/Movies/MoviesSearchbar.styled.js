import styled from "styled-components";

export const SearchbarWrapper = styled.div`
  padding: 10px 20px;
`;

export const Searchbar = styled.form`
  display: grid;
  grid-template-columns: minmax(50px, 1fr) 80px;
  grid-template-areas: "searchbar searchbtn";
  margin: 0 auto;
  border: 1px solid grey;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: 576px) {
    grid-template-columns: 450px 80px;
    width: max-content;
  }

  & input {
    grid-area: searchbar;
    padding: 5px 10px;
    outline: none;
    border: none;
    font-size: 18px;
    line-height: 1.2;
  }

  & button {
    grid-area: searchbtn;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-left: 1px solid gray;
    color: white;
    background-color: black;
    cursor: pointer;
    transition: background-color 600ms, color 600ms;

    &:hover {
      color: white;
      background-color: #B30303;
      transition: background-color 400ms, color 400ms;
    }

    & svg {
      margin-right: 5px;
    }
  }

  &:focus-within {
    box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;
  }
`;