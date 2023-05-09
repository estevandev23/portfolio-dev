import { motion } from 'framer-motion'
import './skills.css'
import ListSkills from '../../components/listSkills/ListSkills'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export default function Skills () {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='container-skills'
    >
      <motion.h2 variants={item}>Skills</motion.h2>
      <ListSkills item={item} />
    </motion.div>
  )
}
