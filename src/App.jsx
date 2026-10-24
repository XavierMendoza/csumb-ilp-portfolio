import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'
export default function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="projects" element={<Projects />} />
    <Route path="courses" element={<Courses />} />
    <Route path="courses/:slug" element={<CourseDetail />} />
    <Route path="*" element={<NotFound />} />
  </Route></Routes></BrowserRouter>
}
