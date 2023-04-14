import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import { Route, Routes } from 'react-router-dom'
import Projects from '../../pages/projects/Projects'

export default function Router () {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  )
}
