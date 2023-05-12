import { motion } from 'framer-motion'
import './skills.css'
import ListSkills from '../../components/listSkills/ListSkills'
import GroupButtonNavigate from '../../components/groupButtonNavigate/GroupButtonNavigate'

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
    <>
      <div className='container-main-skills'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='container-skills'
        >
          <div className='content-skills'>
            <motion.h2 variants={item}>Skills</motion.h2>
            <div className='content-list'>
              <ListSkills item={item} />
            </div>
            <GroupButtonNavigate toBack='/about' toNext='/projects' item={item} backButton />
          </div>
        </motion.div>
      </div>
    </>
  )
}
