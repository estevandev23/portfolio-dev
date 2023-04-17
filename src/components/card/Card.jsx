import { motion } from 'framer-motion'
import './card.css'

export default function Card ({ id, name, description, url, image, tags, date, setIdLayout, item, element, onMoueEnter, onMouseLeave }) {
  return (
    <div className='container-card'>
      <motion.div
        variants={item}
        layoutId={id}
        onClick={() => setIdLayout({ id, element })}
        className='card'
        onMouseEnter={onMoueEnter}
        onMouseLeave={onMouseLeave}
      >
        <motion.h2>{name}</motion.h2>
        <motion.p>{description.substring(0, 50)}...</motion.p>
        <div className='card-urls'>
          <motion.a href={url.public} target='_blank'>View site</motion.a>
          <motion.a href={url.github} target='_blank'>View code</motion.a>
          <motion.img src={image[0]} />
        </div>
      </motion.div>
    </div>
  )
}
