import { motion } from 'framer-motion'

export default function EducationItem ({ children, dateInitial, dateFinal, item }) {
  return (
    <div>
      {children}
      <motion.div variants={item} className='time-line'>
        <div className='group-line'>
          <div className='group-circle'>
            <span className='circle circle1' />
            <p>{dateInitial}</p>
          </div>
          <div className='line' />
        </div>
        <div className='group-line'>
          <div className='line' />
          <div className='group-circle'>
            <span className='circle circle2' />
            <p>{dateFinal}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
