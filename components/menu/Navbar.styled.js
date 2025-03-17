'use client'
import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  height: 70px;
  background-color: ${({ theme }) => theme.BC_Menu};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 100;

  @media (min-width: 900px) {
    width: 25%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
  }

  h2 {
    color: ${({ theme }) => theme.Text_Logo};
    font-size: 1.6rem;
  }

  a {
    color: ${({ theme }) => theme.Text_Menu};
    transition: color 0.3s ease;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.Text_Menu_Hover};
    }
  }
`

const Iconbar = styled.div`
  display: none;
  @media (max-width: 899px) {
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    margin-left: 20px;
  }
  span {
    display: flex;
  }
`

export { Nav, Iconbar }
