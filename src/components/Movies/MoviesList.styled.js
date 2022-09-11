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
    max-width: 300px;
    width: 100%;
    border: 1px solid black;
    border-radius: ${borderRadius};
    background-color: lightgray;

    &:hover {
      border-color: gray;
      box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;
    }
  }

  & a {
    height: 100%;
    display: flex;
    flex-direction: column;
    color: black;
    text-decoration: none;

    & p {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: auto 0;
      padding: 5px;
      font-weight: 500;
    }
  }
`;

export const ImgWrapper = styled.div`
max-height: 370px;
  height: 100%;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  border-bottom: 1px solid black;
  overflow: hidden;

  & img {
    display: block;
    height: 100%;
  }
`;