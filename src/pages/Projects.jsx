import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
export default function Projects() {
  return <div className="container page"><header className="page-header"><p className="eyebrow">FROM LEARNING TO BUILDING</p><h1>Projects<span className="accent">.</span></h1><p className="page-lead">A space for technical projects, the problems they address, and the decisions behind them.</p></header>
    {projects.length ? <div className="course-grid">{projects.map(project => <article className="project-card" key={project.name}>
      {project.screenshot?.url && <img src={project.screenshot.url} alt={project.screenshot.alt || `${project.name} application screenshot`} loading="lazy" />}
      <h2>{project.name}</h2><p>{project.description}</p><div className="tags light-tags">{project.technologies?.map(technology => <span key={technology}>{technology}</span>)}</div>
      <div className="actions">{project.githubUrl && <a href={project.githubUrl}>GitHub repository ↗</a>}{project.liveUrl && <a href={project.liveUrl}>Live application ↗</a>}</div>
    </article>)}</div> : <div className="empty-state project-empty"><span className="empty-symbol" aria-hidden="true">&lt;/&gt;</span><h2>More to build. More to share.</h2><p>Verified technical projects will be added here with descriptions, technologies, and links. In the meantime, explore the courses that form my academic foundation.</p><Link className="button button-primary" to="/courses">Explore My Courses <span aria-hidden="true">→</span></Link></div>}
  </div>
}
