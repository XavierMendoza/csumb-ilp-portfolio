import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { courses } from '../../data/courses'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    const labels = { '/': 'Home', '/about': 'About', '/projects': 'Projects', '/courses': 'Courses' }
    const course = courses.find(item => pathname === `/courses/${item.slug}`)
    document.title = `${course ? `${course.code} — ${course.title}` : labels[pathname] || 'Page not found'} | Xavier Mendoza`
    window.scrollTo(0, 0)
  }, [pathname])
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar key={pathname} />
    <main id="main-content" tabIndex={-1}><Outlet /></main>
    <Footer />
  </>
}
