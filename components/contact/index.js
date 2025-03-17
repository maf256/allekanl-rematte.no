import React, { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Data } from '../common/Data'
import {
  Iframe,
  ContactContainer,
  FormContainer,
  Message,
} from './Contact.styled.js'

export default function Contact({ language }) {
  const form = useRef()
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const langData = Data.contact[language ? 'en' : 'nr']

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 4000)
      return () => clearTimeout(timer)
    }
  }, [message])

  function onSubmit(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_znsyjev',
        'template_4f1qfpu',
        form.current,
        'A6zWxwdubwFpZ1fy0',
      )
      .then(() => {
        form.current.reset()
        setMessage(langData.sent)
        setIsError(false)
      })
      .catch(() => {
        setMessage(langData.err)
        setIsError(true)
      })
  }

  return (
    <ContactContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <span>{langData.subject}</span>
      <h1>{langData.h1}</h1>
      <FormContainer>
        <form ref={form} onSubmit={onSubmit}>
          <p>{langData.h2}</p>

          <label htmlFor="name">{langData.name}</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder={langData.name}
            required
          />

          <label htmlFor="email">{langData.email}</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={langData.email}
            required
          />

          <label htmlFor="message">{langData.message}</label>
          <textarea
            id="message"
            name="message"
            placeholder={langData.message}
            rows="10"
            required
          />

          <button type="submit">{langData.buttonName}</button>
        </form>

        {message ? (
          <Message err={isError}>{message}</Message>
        ) : (
          <Message err={isError}>{' '}</Message>
        )}

        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.1878318604277!2d10.50676427741654!3d59.89583186554648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641136be2073181%3A0x2754650120eec23f!2sOsloWeb%20Webdesign%20%26%20Seo!5e0!3m2!1sen!2sno!4v1687637397889!5m2!1sen!2sno"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location map"
        />
      </FormContainer>
    </ContactContainer>
  )
}
