import { motion } from 'framer-motion'
import useCloseNavbarMobile from '../../customsHooks/useCloseNavbarMobile'
import './about.css'

export default function About () {
  useCloseNavbarMobile()
  return (
    <div
      className='about'
    >
      About
    </div>
  )
}
