import React from 'react'
import { Data } from '../common/Data'
import Link from 'next/link'
import { Navbar, TaggleDiv, Ul, Copyright, TaggleSpan } from './Menus.styled.js'
import ThemeToggle from './ThemeToggle.js'

const Menu = ({
  isDark,
  changeDarkMode,
  open,
  setOpen,
  language,
  changeLanguage,
}) => {
  return (
    <Navbar open={open}>
      <h2>
        <Link href="/">{Data.about[language ? 'en' : 'nr'].h2}</Link>
      </h2>
      <Ul>
        {Data.menu[language ? 'en' : 'nr'].map((item, inx) => (
          <li key={inx}>
            <Link onClick={() => setOpen(false)} href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </Ul>
      <Copyright>
        <h5>
          © {new Date().getFullYear()} Webutvikler | Webdesign by{' '}
          <a
            href="https://www.sitedesign.no"
            target="_blank"
            rel="noopener noreferrer"
            title="Majid Farsangifarsangi - Webdesign & Development"
          >
            Webdesign & Webutvikler
          </a>
        </h5>
      </Copyright>
      <TaggleDiv>
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
      </TaggleDiv>
    </Navbar>
  )
}

export default Menu
