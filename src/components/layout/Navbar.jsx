import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  return <header className="site-header">
    <div className="container nav-shell">
      <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="Xavier Mendoza home">
        <span className="monogram" aria-hidden="true">XM<span>.</span></span>
        <span>Xavier Mendoza<small>COMPUTER SCIENCE PORTFOLIO</small></span>
      </Link>
      <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? 'Close menu' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span></button>
      <nav id="primary-navigation" className={open ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation" onKeyDown={event => {
        if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus() }
      }}>
        {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/courses', 'Courses']].map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
      </nav>
    </div>
  </header>
}
