import DarkModeButton from '../DarkModeButton'
import LinksNavigation from '../linksNavigation/LinksNavigation'
import './navigation.css'

export default function Navigation () {
  return (
    <nav className='navigation'>
      <h3>Welcome!</h3>
      <LinksNavigation />
      <DarkModeButton className='button-dark' />
    </nav>
  )
}
