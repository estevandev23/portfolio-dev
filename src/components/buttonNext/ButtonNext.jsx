import { NavLink } from 'react-router-dom'
import { ArrowNext } from '../Icons'
import { motion } from 'framer-motion'
import './buttonNext.css'

export default function ButtonNext ({ item, to, text, rotate, ...props }) {
  return (
    <NavLink to={to} className='button-next' {...props}>
      <motion.span variants={item}>
        <ArrowNext className={rotate && 'rotate'} />
      </motion.span>
      <motion.p variants={item}>{text}</motion.p>
    </NavLink>
  )
}
