import React from 'react'
import { Lightsvg, Darksvg } from '../common/Svg'

const ThemeToggle = ({ isDark, toggleTheme, size = '40px' }) => {
  const Icon = isDark ? Lightsvg : Darksvg
  return <Icon fontSize={size} changeDarkMode={toggleTheme} />
}

export default ThemeToggle
