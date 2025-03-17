import '../styles/globals.css'
import Navbar from '../components/menu/Navbar'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import theme from '../styles/theme'
import { GoogleAnalytics } from 'nextjs-google-analytics'

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState(false)

  const changeLanguage = () => {
    setLanguage(!language)
  }

  const changeDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeProvider theme={theme(isDark)}>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-8LEH26ZRLP" />
      <Navbar
        isDark={isDark}
        changeDarkMode={changeDarkMode}
        language={language}
        changeLanguage={changeLanguage}
      />
      <Component isDark={isDark} language={language} {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
