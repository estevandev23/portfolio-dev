import { motion } from 'framer-motion'
import { useState } from 'react'
import { Nigth, Sun } from './Icons'

export default function DarkModeButton (props) {
  const [darkMode, setDarkMode] = useState(() => Boolean(document.querySelector('body').classList.contains('dark-mode')))

  function toogleDarkMode () {
    document.querySelector('body').classList.toggle('dark-mode')
    setDarkMode(!darkMode)
  }

  return (
    <motion.div
      onClick={() => toogleDarkMode()}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {darkMode
        ? <Sun />
        : <Nigth />}
    </motion.div>
  )
}
