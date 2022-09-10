import styled from "styled-components";

const borderRadius = "10px";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 0 20px;
  list-style-type: none;

  & li {
    border: 1px solid black;
    border-radius: ${borderRadius};
    background-color: lightgray;

    &:hover {
      border-color: gray;
      box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;
    }
  }

  & a {
    color: black;
    text-decoration: none;

    & p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 5px;
      font-weight: 500;
    }
  }
`;

export const ImgWrapper = styled.div`
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  overflow: hidden;
  border-bottom: 1px solid black;
`;