import { motion } from 'framer-motion'
import './card.css'
import { GitHubIcon, WebIcon } from '../Icons'
import { useRef, useState } from 'react'

const childrens = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0
  }
}

function mouseMove (e, height, width) {
  console.log(e)
  const { movementX, movementY } = e
  const x = ((movementX - width / 2) / width) * 10
  const y = ((movementY - height / 2) / height) * 10

  return `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(1.05)`
}

function resetStyles () {
  return 'perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)'
}

export default function Card ({ id, name, description, url, image, tags, date, setIdLayout, item, element }) {
  const ref = useRef(null)
  const [styles3D, setStyles3D] = useState(resetStyles())

  return (
    <div
      style={{ transform: styles3D }}
      className='container-card'
      ref={ref}
      onMouseMove={(event) => setStyles3D(mouseMove(event, ref.current.clientHeight, ref.current.clientWidth))}
      onMouseLeave={() => setStyles3D(resetStyles())}
    >
      <motion.div
        variants={item}
        layoutId={id}
        onClick={() => setIdLayout({ id, element })}
        className='card'
      >
        <motion.h2 variants={childrens}>{name}</motion.h2>
        <motion.img src={image[0]} />
        <motion.p variants={childrens}>{description.substring(0, 50)}...</motion.p>
        <motion.div className='card-urls' variants={childrens}>
          <motion.a href={url.public} className='links-project' target='_blank'><WebIcon />View site</motion.a>
          <motion.a href={url.github} className='links-project' target='_blank'><GitHubIcon />View code</motion.a>
        </motion.div>
        <motion.div variants={childrens} className='content-card-time'>
          <p className='date-card'>{date}</p>
          <div className='tags-container'>
            {
              tags.map((tag) => (
                <motion.p variants={childrens} className='tags-card' key={tag}><span className={`circle-tags ${tag.toLowerCase()}`} />{tag}</motion.p>
              ))
            }
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
