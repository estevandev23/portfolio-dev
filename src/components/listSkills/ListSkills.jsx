import { motion } from 'framer-motion'
import { CssIcon, FirebaseIcon, GitHubIconNew, GitIcon, HtmlIcon, JavascriptIcon, MariaDbIcon, MongoDbIcon, MysqlIcon, NodeJsIcon, ReactIcon, SpringBootIcon, TailwindIcon, Python, NextJs } from '../Icons'
import './listSkills.css'

export const skills = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'NextJs',
        icon: <NextJs />
      },
      {
        name: 'Html',
        icon: <HtmlIcon />
      },
      {
        name: 'Tailwind',
        icon: <TailwindIcon />
      },
      {
        name: 'Css',
        icon: <CssIcon />
      },
      {
        name: 'Javascript',
        icon: <JavascriptIcon />
      },
      {
        name: 'React',
        icon: <ReactIcon />
      }
    ]
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'NodeJS',
        icon: <NodeJsIcon />
      },
      {
        name: 'SpringBoot',
        icon: <SpringBootIcon />
      },
      {
        name: 'Python',
        icon: <Python />
      }
    ]
  },
  {
    title: 'Versions',
    skills: [
      {
        name: 'Git',
        icon: <GitIcon />
      },
      {
        name: 'Git Hub',
        icon: <GitHubIconNew />
      }
    ]
  },
  {
    title: 'Data Bases',
    skills: [
      {
        name: 'Mysql',
        icon: <MysqlIcon />
      },
      {
        name: 'Maria Db',
        icon: <MariaDbIcon />
      },
      {
        name: 'Mongo Db',
        icon: <MongoDbIcon />
      },
      {
        name: 'Firebase',
        icon: <FirebaseIcon />
      }
    ]
  }
]

export default function ListSkills ({ item }) {
  return skills.sort((before, after) => before.skills.length < after.skills.length ? 1 : -1).map(skill => (
    <motion.div variants={item} className='list-skills' key={skill.title}>
      <motion.h3 variants={item}>{skill.title}</motion.h3>
      <div className='list-skills-content'>
        {skill.skills.map((item, index) => (
          <motion.div variants={item} className={`list-skills-item ${item.name.replace(' ', '').toUpperCase()}`} key={index}>
            {item.icon}
            <p>{item.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ))
}
