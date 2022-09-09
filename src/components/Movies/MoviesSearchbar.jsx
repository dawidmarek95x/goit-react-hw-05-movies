import React from 'react'
import { Searchbar, SearchbarWrapper } from './MoviesSearchbar.styled';
import { BsSearch } from "react-icons/bs";

const MoviesSearchbar = ({value, submitHandler, changeHandler}) => {
  return (
    <SearchbarWrapper>
      <Searchbar onSubmit={submitHandler}>
        <input
          type="text"
          value={value}
          onChange={changeHandler}
        />
        <button type="submit"><BsSearch />Search</button>
      </Searchbar>
    </SearchbarWrapper>
  )
}

export default MoviesSearchbar;