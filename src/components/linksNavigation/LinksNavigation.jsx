import { motion } from 'framer-motion'
import linksList from './linksList'
import { NavLink } from 'react-router-dom'
import './linksNavigation.css'

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const variants = {
  hidden: { y: 10 },
  visible: {
    y: 0,
    transition: {
      duration: 0.2,
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
}

export default function LinksNavigation (props) {
  function LinksList () {
    return linksList.map(link => (
      <NavLink
        className={({ isActive }) => `link ${isActive && 'selected'}`}
        to={link.path}
        key={link.id}
      >
        <motion.li
          variants={item}
        >
          {link.name}
        </motion.li>
      </NavLink>
    ))
  }

  return (
    <motion.ul
      variants={variants}
      initial='hidden'
      animate='visible'
      className='links'
      {...props}
    >
      <LinksList />
    </motion.ul>
  )
}
