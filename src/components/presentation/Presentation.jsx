import { motion } from 'framer-motion'
import './presentation.css'
import SocialIcons from '../socialIcons/SocialIcons'
import ButtonNext from '../buttonNext/ButtonNext'

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
}

export default function Presentation () {
  return (
    <motion.section
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={container}
      className='container-presentation'
    >
      <div className='texts-presentation'>
        <div>
          <motion.h1 variants={item}>Esteban Villamizar</motion.h1>
          <motion.h2 variants={item}>Hello World! <span>I'm web developer</span></motion.h2>
          <SocialIcons />
        </div>
        <motion.p variants={item}>How are you? I'm so grateful that you are here, welcome and go it</motion.p>
        <motion.a variants={item} href='cv.pdf' className='button-download' download>Download CV</motion.a>
      </div>
      <motion.img variants={item} src='foto2.png' className='image' />
      <ButtonNext to='/about' item={item} text='Go it' />
    </motion.section>
  )
}
