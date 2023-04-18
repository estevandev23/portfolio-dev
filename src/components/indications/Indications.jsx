import { motion } from 'framer-motion'
import './indications.css'

export default function Indications ({ indications, variants }) {
  return indications.map((indication, index) => (
    <motion.p className='indication' variants={variants} key={index}>{indication}</motion.p>
  ))
}
