import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Item, List, MainLink } from './App.styled';

const App = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <Item>
              <MainLink to="/">Home</MainLink>
            </Item>
            <Item>
              <MainLink to="/movies">Movies</MainLink>
            </Item>
          </List>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default App;