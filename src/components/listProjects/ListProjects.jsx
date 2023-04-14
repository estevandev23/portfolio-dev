import './listProjects.css'
import MyList from './../../api/projects.json'
import Card from '../card/Card'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
    />
  ))
}
export default function ListProjects () {
  const [idLayout, setSetIdLayout] = useState(null)

  return (
    <>
      <div className='card-list'>
        <List setSetIdLayout={setSetIdLayout} />
      </div>
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
