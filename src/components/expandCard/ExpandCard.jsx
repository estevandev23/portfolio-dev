import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import LinksUrlIcons from '../linksUrlIcons/LinksUrlIcons'
import './expandCard.css'
import TagList from '../../tagsList/TagList'
import monthTransform from '../../logic/monthTransform'
import Indications from '../indications/Indications'

const variants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4
    }
  }
}

const item = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function ExpandCard ({ idLayout, setSetIdLayout }) {
  return (
    <AnimatePresence>
      {idLayout && (
        <>
          <div className='backdrop' onClick={() => setSetIdLayout(null)} />
          <motion.div animate='show' initial='hidden' exit='hidden' variants={variants} layoutId={idLayout.id} className='expand-card'>
            <div className='header-expand'>
              <motion.h5 variants={item}>{idLayout.element.name}</motion.h5>
              <motion.button className='button-close' onClick={() => setSetIdLayout(null)}>X</motion.button>
            </div>
            <div className='image-content-container'>
              <motion.img variants={item} src={idLayout.element.image[0]} />
              <div className='content-main-info'>
                <motion.p variants={item}>{idLayout.element.description}</motion.p>
                {idLayout.element.indications && (
                  <motion.strong variants={item} className='indications-list'>
                    Indications:
                    <Indications indications={idLayout.element.indications} variants={item} />
                  </motion.strong>
                )}
                <motion.div variants={item} className='url-links-expand'>
                  <LinksUrlIcons url={idLayout.element.url} />
                </motion.div>
                <div className='tags-expand'>
                  <TagList childrens={item} tags={idLayout.element.tags} />
                </div>
                <motion.p variants={item} className='date-expand'>Date: {monthTransform(idLayout.element.date)}</motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
