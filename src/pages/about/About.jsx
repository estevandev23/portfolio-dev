import AboutMe from '../../components/aboutMe/AboutMe'
import useCloseNavbarMobile from '../../customsHooks/useCloseNavbarMobile'
import './about.css'

export default function About () {
  useCloseNavbarMobile()
  return (
    <div className='about'>
      <AboutMe />
    </div>
  )
}
