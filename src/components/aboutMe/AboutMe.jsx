import { motion } from 'framer-motion'
import EducationItem from './EducationItem'
import './aboutMe.css'
import { NavLink } from 'react-router-dom'
import GroupButtonNavigate from '../groupButtonNavigate/GroupButtonNavigate'

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
      <motion.p variants={item}>I am a fullstack web developer, with React and Node I have did sundry projects, as well I hace did projects with Spingboot, React Native, PHP, Laravel and Java. I love to develop software that can help other people, I also like to learn daily because I think this is the fundamental basis to improve my skills with code as well as soft skills, I know I can be a great opportunity for your company or project, if you want to contact me, you will have the contacts in the <NavLink to='/' className='redirect'>home page</NavLink></motion.p>
      <div>
        <motion.h3 variants={item}>Experience</motion.h3>
        <EducationItem item={item} dateInitial='Feb-2024' dateFinal='Current'>
          <motion.h4 variants={item}>Junior Dev <motion.span variants={item}>| Fundación cardiovascular de Colombia </motion.span></motion.h4>
          <motion.p variants={item}>I have successfully implemented and improved existing software processes, enhancing the user experience and performance of the applications. I have also worked on new projects, learning many skills such as project deployment with Docker, creation of microservices with Springboot, integration with Eureka and gateways, among others. My contribution to development has been excellent, as I have successfully migrated existing processes to new processes, improving process performance by up to 70%.</motion.p>
        </EducationItem>
        <EducationItem item={item} dateInitial='Jun-2023' dateFinal='Feb-2024'>
          <motion.h4 variants={item}>Helpdesk <motion.span variants={item}>| Fundación cardiovascular de Colombia</motion.span></motion.h4>
          <motion.p variants={item}>I have acquired analytical skills through problem solving, which has improved response times. In addition, I have worked closely with a highly efficient team to achieve these results. I developed communication and analytical skills that helped me contribute to the training and development of the software used.</motion.p>
        </EducationItem>
        <EducationItem item={item} dateInitial='Jun-2022' dateFinal='Mar-2023'>
          <motion.h4 variants={item}>Fullstack Dev <motion.span variants={item}>| Coex model</motion.span></motion.h4>
          <motion.p variants={item}>I worked as frontend/backend developer, I achieved to develop application for Colombian Nutritionists, where we reduce they the work hours in <strong>98.5%</strong>, from 8 hours to 5 minutes. It's really good for they</motion.p>
        </EducationItem>
        <EducationItem item={item} dateInitial='Jan-2022' dateFinal='Current'>
          <motion.h4 variants={item}>Software dev <motion.span variants={item}>| Personal projects</motion.span></motion.h4>
          <motion.p variants={item}>I have been working in personal projects since 2022, I achieving to improve my skills, I'm finding make clean code and these projects have been very important for me</motion.p>
        </EducationItem>
      </div>
      <GroupButtonNavigate backButton toNext='/skills' toBack='/' item={item} />
    </motion.div>
  )
}
