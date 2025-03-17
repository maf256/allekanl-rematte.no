"use client"
import styled from 'styled-components';

export const AboutPage = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    min-height: 100vh;
    background-color: ${({theme}) => theme.BC_Home};
    img {
        margin: 30px 0px;
    }
    h2,h3{
        margin: 30px 0px;
        color: ${({theme}) => theme.Text_Logo};

    }
    @media (min-width: 900px) {
        margin-left: 25%;
        width: 75%;
        padding: 100px 10%;

        img {
            width: 100%;
            height: auto;  
        }
        p {
            font-size: 20px;
        }
    }
    @media (max-width: 899px) {
        width: 100%;
        padding: 100px 10px;
        img {
            margin: auto auto;
            width: 100%;
            height: auto;
        }
    }
`
export const NameContainer = styled.div`
    padding: 30px 0px;
    h3{
        color: ${({theme}) => theme.Text_Paragraph};
    }

`

export const InfoContainer = styled.div`
    border-top: solid 1px ${({theme}) => theme.Text_Paragraph};
    border-bottom: solid 1px ${({theme}) => theme.Text_Paragraph};
    padding: 30px 5px;
    p {
        color: ${({theme}) => theme.Text_Paragraph};
        margin: 15px 0;
        line-height: 1.6;
        font-size: 18px;

    }

`
export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;

    h5 {
        display:inline-block; 

        color: ${({theme}) => theme.Text_Title};
        font-size: 15px;
        width: 130px;
    }
    p {
        font-size: 15px;
        display: inline;

    }
    li {
        width: 350px;
    }
`

export const ButtonCV = styled.a`
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px;
    margin: 50px 0;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
    color: ${({theme}) => theme.Text_Title};
    background-color: ${({theme}) => theme.Text_Logo};
    font-size: 17px;
    font-weight: 600;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    /* &:hover {
        box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
        outline: 0;
    } */
    :hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    :focus {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    }
`

export const Span = styled.span`
    color: ${({theme}) => theme.Text_Paragraph};
    background-color: gray;
    padding: 7px;
`

export const Knowledge = styled.div`
    display: flex;
    flex-wrap: wrap;

`

export const UlKnowledgeDiv = styled.ul`
    width: 100%;
    /* background-color: ${({theme}) => theme.BC_Home2}; */
    h2 {
        padding-top: 15px;
    }

`
export const UlKnowledge = styled.ul`
    min-width: 220px;
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    h4 {
        display:inline-block; 
        color: ${({theme}) => theme.Text_Logo};
        margin-bottom: 20px;
        font-size: 25px;

    }
    h5{
        display:inline-block; 
        color: ${({theme}) => theme.Text_Title};
        font-size: 15px;
    }
    li {
        display: flex; 
        align-items: center;
        margin-bottom: 6px;
    }
`


export const EducationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
export const Education = styled.div`
    min-width: 320px;
    width: 40%;
    background-color: ${({theme}) => theme.BC_Home};
    h2 {
        display: inline-flex;
    }
`

export const UlEducation = styled.ul`
    border-left: 3px solid ${({theme}) => theme.BC_Home2};
    padding-left: 5px;
    display: flex;
    color: ${({theme}) => theme.Text_Logo};
    flex-direction: column;
    h5 {
        width: 95px;
        height: 50px;
        background-color: ${({theme}) => theme.BC_Home2};
        border-radius: 10px;
        display: flex;
        justify-content: center;
        font-weight: 200;
        align-items: center;
    }
    h4 {
        font-size: 13px;
        font-weight: 300;
    }
    h3 {
        font-size: 13px;
        margin-bottom: 7px;
    }
    div {
        margin-left: 10px;
        display: inline-flex;
        flex-direction: column;
    }
    li {
        margin: 15px 0px;
        display: inline-flex;   
        align-items: center;

        span{
            display: inline-block;
            width: 15px;
            height: 15px;
            border: 1px solid ${({theme}) => theme.BC_Home2};
            background-color: ${({theme}) => theme.BC_Home};
            /* box-shadow: 0 0 1px black; */
            border-radius: 50%;
            position: relative;
            background-color: white;
            left: -13px;
        }
    }

`