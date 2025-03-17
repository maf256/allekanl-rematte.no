'use client'
import styled from 'styled-components'

// Styled Components
const Navbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.BC_Menu};

  h2 {
    color: ${({ theme }) => theme.Text_Logo};
    margin: 20px 0;
  }

  li {
    margin: 10px 0;
    font-size: 1.1rem;

    a {
      color: ${({ theme }) => theme.Text_Menu};
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.Text_Menu_Hover};
      }
    }
  }

  @media (min-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 25%;
  }

  @media (max-width: 899px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    height: 100vh;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
  }
`

const TaggleDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const Copyright = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 0.8rem;
  text-align: center;
  color: ${({ theme }) => theme.Text_Paragraph};

  a {
    color: ${({ theme }) => theme.Text_Logo};
    &:hover {
      text-decoration: underline;
    }
  }
`
const TaggleSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: ${({ theme }) => theme.Icon_Color};
  margin: ${({ margin }) => margin};
  margin-right: 15px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.Icon_bkColor};
  padding: 6px;
  border-radius: 7px;
  cursor: pointer;
`

// Export explicitly
export { Navbar, TaggleDiv, Ul, Copyright, TaggleSpan }
