import './listProjects.css'
import MyList from './../../api/projects.json'
import Card from '../card/Card'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function animation3D (e, iam) {
  console.log(e, iam)
}

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
      onMouseEnter={(e) => animation3D(e, this)}
    />
  ))
}

export default function ListProjects () {
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
      <AnimatePresence>
        {idLayout && (
          <div className='backdrop' onClick={() => setSetIdLayout(null)}>
            <motion.div layoutId={idLayout.id} className='expand-card'>
              <motion.h5>hola {idLayout.element.name}</motion.h5>
              <motion.button onClick={() => setSetIdLayout(null)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
