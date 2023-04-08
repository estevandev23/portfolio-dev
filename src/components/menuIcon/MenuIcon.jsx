import { useNavbarMobile } from '../../providers/NavbarMobileProvider'
import './menuIcon.css'
import { motion } from 'framer-motion'

export default function MenuIcon () {
  const { navbar, toggleNavbar } = useNavbarMobile()

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className={`icon-menu ${navbar && 'open'}`}
      onClick={toggleNavbar}
    >
      <div />
      <div />
      <div />
    </motion.div>
  )
}
