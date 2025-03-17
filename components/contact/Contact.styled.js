import styled from 'styled-components'

const Iframe = styled.iframe`
  width: 100%;
  height: 350px;
  /* width="600" height="450" style="border:0;" allowfullscreen=""  */
  background-color: black;
`

const ContactContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  min-height: 100vh;
  padding: 30px 10px;

  background-color: ${({ theme }) => theme.BC_Home};
  h1,
  h2 {
    margin: 30px 0px;
    color: ${({ theme }) => theme.Text_Logo};
  }
  @media (min-width: 900px) {
    margin-left: 25%;
    width: 75%;
    p {
      font-size: 20px;
    }
  }
  @media (max-width: 899px) {
    width: 100%;
  }
`

const FormContainer = styled.div`
  display: flex;
  padding-bottom: 100px;
  flex-direction: column;
  form {
    p {
      padding-bottom: 30px;
    }
    display: flex;
    flex-direction: column;

    input[type='text'],
    input[type='email'],
    textarea {
      height: 50px;

      font-size: 16px;
      color: ${({ theme }) => theme.Text_Title};
      font-weight: 600;
      background-color: ${({ theme }) => theme.BC_Home};
      border-radius: 5px;
      padding: 10px;
      margin: 15px 0px;
    }
    textarea {
      height: 120px;
    }

    button {
      width: 200px;
      height: 50px;
      font-size: 16px;
      background-color: ${({ theme }) => theme.BC_Home};
      color: ${({ theme }) => theme.Text_Title};
      border-radius: 5px;
      padding: 10px;
      text-align: center;
      :hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
      :focus {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      }
    }
  }
`
const Message = styled.p`
  color: ${({ err }) => (err ? 'red' : 'green')};
  font-size: 18px;
  padding: 10px 0px;
`

export { Iframe, ContactContainer, FormContainer, Message }
