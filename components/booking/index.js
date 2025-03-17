// import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Data } from '../common/Data';
import {Span} from '../about/pageStyled'

export default function Booking ({language}) {

  return (
    <ContactContainer>
        <Span>{Data.booking[language ? 'en' : 'nr'].subject}</Span>
        <h1>{Data.booking[language ? 'en' : 'nr'].h1}</h1>
        <h3>{Data.booking[language ? 'en' : 'nr'].h2}</h3>
        <h3>{Data.booking[language ? 'en' : 'nr'].h3}</h3>
        <Line />
        {/* <GoogleCalendarScheduling language={language} /> */}
        <Iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ08q78jfdTSAvdjzrYsZzvFRPIxbVtTln79uu3M9ITm3VITP81IoKX-YurFrpjs3PoE-IG9z8je?gv=true"
            style={{ border: '0' }}
            width="100%"
            height="600"
            frameBorder="0"
      ></Iframe>
    </ContactContainer>
    
  );
};

const ContactContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    min-height: 100vh;
    background-color: ${({theme}) => theme.BC_Home};
    h1,h3{
        margin: 30px 0px;
        color: ${({theme}) => theme.Text_Paragraph};
        word-spacing: 1px;

    }
    @media (min-width: 900px) {
        margin-left: 25%;
        width: 75%;
        padding: 100px 10%;
        p {
            font-size: 20px;
        }
    }
    @media (max-width: 899px) {
        width: 100%;
        padding: 100px 10px;
    }
`

const Line = styled.div`
    width: 100%;
    border-top: 3px solid ${({theme}) => theme.Text_Logo}; 
`
const Iframe = styled.iframe`

`