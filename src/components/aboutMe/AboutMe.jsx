import { motion } from 'framer-motion'
import EducationItem from './EducationItem'
import './aboutMe.css'
import { NavLink } from 'react-router-dom'

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
}

export default function AboutMe () {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='container-about-me'
    >
      <motion.h2 variants={item}>About Me</motion.h2>
      <motion.p variants={item}>I am a fullstack web developer, I love to develop software that can help other people, I also like to learn daily because I think this is the fundamental basis to improve my skills with code as well as soft skills, I know I can be a great opportunity for your company or project, if you want to contact me, you will have the contacts in the <NavLink to='/' className='redirect'>home page</NavLink></motion.p>
      <div>
        <motion.h3 variants={item}>Experience</motion.h3>
        <EducationItem item={item} dateInitial='Jun-2022' dateFinal='Mar-2023'>
          <motion.h4 variants={item}>Coex Model <motion.span variants={item}>| Fullstack Dev</motion.span></motion.h4>
          <motion.p variants={item}>I worked as frontend/backend developer, I achieved to develop application for Colombian Nutritionists, where we reduce they the work hours in <strong>98.5%</strong>, from 8 hours to 5 minutes. It's really good for they</motion.p>
        </EducationItem>
        <EducationItem item={item} dateInitial='Jan-2022' dateFinal='Current'>
          <motion.h4 variants={item}>Personal Projects <motion.span variants={item}>| Fullstack Dev</motion.span></motion.h4>
          <motion.p variants={item}>I have been working in personal projects since 2022, I achieving to improve my skills, I'm finding make clean code and these projects have been very important for me</motion.p>
        </EducationItem>
      </div>
    </motion.div>
  )
}
