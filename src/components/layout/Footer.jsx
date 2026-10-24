import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-content">
    <div><strong>{profile.name}</strong><p>Computer Science · California State University, Monterey Bay</p></div>
    <Link to="/courses">Explore the academic portfolio <span aria-hidden="true">↗</span></Link>
    <small>© {new Date().getFullYear()} {profile.name}. Student portfolio.</small>
  </div></footer>
}
