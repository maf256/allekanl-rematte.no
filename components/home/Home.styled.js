import styled from 'styled-components'

const Main = styled.main`
  background-color: ${({ theme }) => theme.BC_Home};
  color: ${({ theme }) => theme.Text_Paragraph};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  @media (min-width: 900px) {
    margin-left: 25%;
    width: 75%;
  }

  @media (max-width: 899px) {
    width: 100%;
    padding: 20px;
    padding-top: 60px;
  }
`

const Div = styled.div`
  max-width: 800px;
  text-align: center;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 15px;
    line-height: 1.4;
  }

  h1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.Text_Logo};
  }

  h2 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.Text_Logo};
  }

  h3,
  h4,
  h5 {
    color: ${({ theme }) => theme.Text_Paragraph};
    font-size: 1.2rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 20px;
  }
  @media (max-width: 899px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.3rem;
    }
    h3,
    h4,
    h5 {
      font-size: 1.1rem;
    }
    p {
      font-size: 1rem;
    }
  }
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  a {
    color: ${({ theme }) => theme.Icon_Color};
    font-size: 0;

    svg {
      width: 35px;
      height: 35px;
    }

    &:hover svg,
    &:focus svg {
      transform: scale(1.1);
    }
  }
`

const Card = styled.div`
  img {
    width: 100%;
    max-width: 450px;
    height: auto;
    border-radius: 8px;

    @media (max-width: 900px) {
      max-width: 350px;
    }

    @media (max-width: 500px) {
      max-width: 300px;
    }
  }
`

export { Main, Div, SocialContainer, Card }
