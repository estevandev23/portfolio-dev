import './listProjects.css'
import MyList from './../../api/projects.json'
import Card from '../card/Card'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ExpandCard from '../expandCard/ExpandCard'

const container = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, x: 10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function ListProjects () {
  function List ({ setSetIdLayout }) {
    return MyList.map((element) => (
      <Card
        name={element.name}
        description={element.description}
        url={element.url}
        image={element.image}
        tags={element.tags}
        date={element.date}
        key={element.id}
        id={element.id}
        setIdLayout={setSetIdLayout}
        element={element}
        item={item}
      />
    )).reverse()
  }
  const [idLayout, setSetIdLayout] = useState(null)

  return (
    <>
      <motion.div
        initial='hidden'
        animate='show'
        variants={container}
        className='card-list'
      >
        <List setSetIdLayout={setSetIdLayout} />
      </motion.div>
      <ExpandCard idLayout={idLayout} setSetIdLayout={setSetIdLayout} />
    </>
  )
}
