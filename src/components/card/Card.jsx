import { motion } from 'framer-motion'
import './card.css'
import { useLayoutEffect, useRef, useState } from 'react'
import LinksUrlIcons from '../linksUrlIcons/LinksUrlIcons'

const childrens = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0
  }
}

function mouseMove (e, height, width) {
  const { layerX, layerY } = e
  const x = ((layerX - width / 2) / width) * 5
  const y = ((layerY - height / 2) / height) * 5

  return `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(1.05)`
}

function resetStyles () {
  return 'perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)'
}

export default function Card ({ id, name, description, url, image, tags, date, setIdLayout, item, element }) {
  const ref = useRef(null)
  const refMouse = useRef(null)

  const [styles3D, setStyles3D] = useState(resetStyles())
  const [position, setPosition] = useState({ x: 0, y: 0 })

  function ligthMouseMove (event) {
    const { layerX, layerY } = event.nativeEvent
    setPosition({ x: layerX, y: layerY })
  }

  function removeEvent () {
    setPosition({ x: 0, y: 0 })
  }

  useLayoutEffect(() => {
    ref.current.addEventListener('mousemove', (event) => setStyles3D(mouseMove(event, ref.current.clientHeight, ref.current.clientWidth)))

    return ref.current.removeEventListener('mousemove', (event) => setStyles3D(mouseMove(event, ref.current.clientHeight, ref.current.clientWidth)))
  }, [])

  return (
    <div
      style={{ transform: styles3D }}
      className='container-card'
      ref={ref}
      onMouseMove={(event) => ligthMouseMove(event)}
      onMouseLeave={() => {
        setStyles3D(resetStyles())
        removeEvent()
      }}
    >
      <div ref={refMouse} className='circle-ligth' style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
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
          <LinksUrlIcons url={url} />
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
