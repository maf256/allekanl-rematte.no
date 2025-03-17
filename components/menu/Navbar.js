'use client'
import React from 'react'
import Burger from './Burger.js'
import { Data } from '../common/Data.js'
import Link from 'next/link'
import { Nav, Iconbar } from './Navbar.styled.js'
import { TaggleSpan } from './Menus.styled.js'
import ThemeToggle from './ThemeToggle.js'

function Navbar({ isDark, changeDarkMode, language, changeLanguage }) {
  return (
    <Nav role="navigation" aria-label="Main menu">
      <Iconbar>
        <h2>
          <Link href="/">{Data.about[language ? 'en' : 'nr'].h2}</Link>
        </h2>
        <span>
          <ThemeToggle
            role="button"
            aria-label="Toggle language"
            isDark={isDark}
            toggleTheme={changeDarkMode}
          />
          <TaggleSpan
            role="button"
            aria-label="Toggle language"
            onClick={changeLanguage}
          >
            {language ? 'Nr' : 'En'}
          </TaggleSpan>
        </span>
      </Iconbar>
      <Burger
        isDark={isDark}
        changeDarkMode={changeDarkMode}
        language={language}
        changeLanguage={changeLanguage}
      />
    </Nav>
  )
}

export default React.memo(Navbar)
