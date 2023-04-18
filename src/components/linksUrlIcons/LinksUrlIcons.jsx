import { motion } from 'framer-motion'
import { GitHubIcon, WebIcon } from '../Icons'
import './linksUrlIcons.css'

export default function LinksUrlIcons ({ url }) {
  return (
    <>
      <motion.a href={url.public} className='links-project' target='_blank'><WebIcon />View site</motion.a>
      <motion.a href={url.github} className='links-project' target='_blank'><GitHubIcon />View code</motion.a>
    </>
  )
}
