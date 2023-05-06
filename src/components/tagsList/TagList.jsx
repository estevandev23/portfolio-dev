import { motion } from 'framer-motion'
import './tagList.css'

export default function TagList ({ tags, childrens }) {
  return tags.map((tag) => (
    <motion.p variants={childrens} className='tags-card' key={tag}><span className={`circle-tags ${tag.toLowerCase()}`} />{tag}</motion.p>
  ))
}
