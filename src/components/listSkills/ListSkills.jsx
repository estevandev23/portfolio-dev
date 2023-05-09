import { motion } from 'framer-motion'
import { HtmlIcon } from '../Icons'
import './listSkills.css'

export const skills = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'HTML',
        icon: <HtmlIcon />
      },
      {
        name: 'HTML',
        icon: <HtmlIcon />
      }
    ]
  },
  {
    title: 'Backend',
    skills: [{
      name: 'NodeJS',
      icon: <HtmlIcon />
    }]
  }
]

export default function ListSkills ({ item }) {
  return skills.map(skill => (
    <motion.div variants={item} className='list-skills' key={skill.title}>
      <motion.h3 variants={item}>{skill.title}</motion.h3>
      <div className='list-skills-content'>
        {skill.skills.map((item, index) => (
          <motion.div variants={item} className={`list-skills-item ${item.name}`} key={index}>
            {item.icon}
            <p>{item.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ))
}
