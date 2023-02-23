import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './Layout.styled';

export function Layout() {
  return (
    <>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
