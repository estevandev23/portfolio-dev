import { createContext, useState, useContext } from 'react'

export const navbarMobileContext = createContext()

export function useNavbarMobile () {
  return useContext(navbarMobileContext)
}

export default function NavbarMobileProvider ({ children }) {
  const [navbar, setNavbar] = useState(false)

  function toggleNavbar () {
    setNavbar(!navbar)
  }

  function hiddenNavbar () {
    setNavbar(false)
  }

  function showNavbar () {
    setNavbar(true)
  }

  const exportValues = {
    navbar,
    toggleNavbar,
    hiddenNavbar,
    showNavbar
  }

  return (
    <navbarMobileContext.Provider value={exportValues}>
      {children}
    </navbarMobileContext.Provider>
  )
}
