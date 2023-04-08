import { useNavbarMobile } from '../../providers/NavbarMobileProvider'
import LinksNavigation from '../linksNavigation/LinksNavigation'
import MenuIcon from '../menuIcon/MenuIcon'
import './navigationMobile.css'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function NavigationMobile () {
  const { navbar, hiddenNavbar } = useNavbarMobile()
  return (
    <AnimatePresence>
      {navbar &&
        <motion.nav
          key='123'
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          className='navigation-mobile'
          onClick={hiddenNavbar}
        >
          <LinksNavigation />
        </motion.nav>}
      <MenuIcon />
    </AnimatePresence>
  )
}
