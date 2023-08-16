import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1;

  background-color: beige;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0;
    padding: 0;

    flex: 1;
    justify-content: center;
  }

  li {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: darkgray;
  }

  .logo {
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
