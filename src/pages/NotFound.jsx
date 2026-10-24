import { Link } from 'react-router-dom'
export default function NotFound() {
  return <div className="container page not-found"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>A different path<span className="accent">.</span></h1><p>This page isn't part of the portfolio. Explore the course directory or return to the homepage.</p><div className="actions"><Link className="button button-primary" to="/courses">Explore Courses →</Link><Link className="button button-secondary" to="/">Back to Home</Link></div></div>
}
