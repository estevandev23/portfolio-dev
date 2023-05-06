import ButtonNext from '../buttonNext/ButtonNext'
import './groupButtonNavigate.css'

export default function GroupButtonNavigate ({ backButton, item, toNext, toBack }) {
  return (
    <div className='content-buttons'>
      {backButton && <ButtonNext to={toBack} item={item} text='Back' rotate />}
      <ButtonNext to={toNext} item={item} text='Next' />
    </div>
  )
}
