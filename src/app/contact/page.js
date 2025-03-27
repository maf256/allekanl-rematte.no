"use client";

import React, { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Page ()  {
  const form = useRef()
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const contact = {
    nr: {
      subject: 'Kontakt',
      h1: 'Ta Kontakt',
      h2: 'La oss sende oss e-post',
      buttonName: 'Sende melding',
      name: 'Navnet ditt',
      email: 'Din epost',
      message: 'Din beskjed',
      sent: 'Din melding har blitt sendt.',
      err: 'Meldingen din ble ikke sendt',
    },
  };
  const langData = contact['nr']; // or 'en'

  // Then you can do:
  



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
    <main>
        <section 
          id="contact" 
          className="w-full bg-white px-6 py-12 items-center justify-center min-h-[90vh] flex">
          <div className="w-full mx-auto min-w-0 lg:min-w-[72rem]">
            <h2 className="text-3xl font-semibold mb-6 text-center">{langData.h2}</h2>

            <form ref={form} onSubmit={onSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {langData.name}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={langData.name}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {langData.email}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={langData.email}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {langData.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={langData.message}
                  rows="10"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {langData.buttonName}
                </button>
              </div>
            </form>

          </div>
        </section>
    
    </main>
  )
}
