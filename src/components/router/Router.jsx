import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import { Route, Routes } from 'react-router-dom'

export default function Router () {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}
