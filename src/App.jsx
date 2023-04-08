import Navigation from './components/navigation/Navigation'
import Router from './components/router/Router'
import './app.css'
import DarkModeButton from './components/DarkModeButton'
import NavbarMobileProvider from './providers/NavbarMobileProvider'
import NavigationMobile from './components/navigationMobile/NavigationMobile'
import { AnimatePresence, motion } from 'framer-motion'

function App () {
  return (
    <main>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 3 }}
        className='bg-img'
        src='background2.png'
      />
      <DarkModeButton
        className='icon'
      />
      <NavbarMobileProvider>
        <header>
          <Navigation />
          <NavigationMobile />
        </header>
        <div className='route-style'>
          <AnimatePresence>
            <Router />
          </AnimatePresence>
        </div>
      </NavbarMobileProvider>
    </main>
  )
}

export default App
