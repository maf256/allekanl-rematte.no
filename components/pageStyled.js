"use client"
import styled from 'styled-components'


export const Main = styled.main`
  background-color: #ededed;
  min-height: 100vh;
  @media (min-width: 900px) {
    margin-left: 25%;
    width: 75%;

  }
  @media (max-width: 899px) {
    width: 100%;
  }
`


export const H1 = styled.h1`
  color: red;
`