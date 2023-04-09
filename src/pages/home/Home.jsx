import Presentation from '../../components/presentation/Presentation'
import './home.css'
import useCloseNavbarMobile from '../../customsHooks/useCloseNavbarMobile'

export default function Home () {
  useCloseNavbarMobile()
  return (
    <div className='home'>
      <Presentation />
    </div>
  )
}
