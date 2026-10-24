import { Link } from 'react-router-dom'
import { profile, program } from '../data/profile'
import { courses } from '../data/courses'
import CourseCard from '../components/courses/CourseCard'
import SectionHeading from '../components/ui/SectionHeading'

export default function Home() {
  return <>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow">CSUMB · ACADEMIC &amp; PROFESSIONAL PORTFOLIO</p>
        <h1>{profile.name.split(' ')[0]}<br /><span>{profile.name.split(' ').slice(1).join(' ')}.</span></h1>
        <p className="hero-role">{profile.headline}</p>
        <p className="hero-intro">{profile.introduction}</p>
        <div className="actions"><Link className="button button-primary" to="/courses">Explore My Courses <span aria-hidden="true">↗</span></Link><Link className="button button-secondary" to="/projects">View My Projects <span aria-hidden="true">→</span></Link></div>
      </div>
      <aside className="focus-panel" aria-label="Academic focus">
        {profile.photo?.url && <img className="profile-photo" src={profile.photo.url} alt={profile.photo.alt || `Portrait of ${profile.name}`} />}
        <div className="focus-graphic" aria-hidden="true"><span>&lt;/&gt;</span><div className="orbit orbit-one" /><div className="orbit orbit-two" /><i /></div>
        <p className="eyebrow">MY DIRECTION</p><h2>Thoughtful code.<br />Reliable systems.</h2><p>{profile.focus}</p>
        <div className="panel-divider" /><span className="panel-label">LEARNING &amp; EXPLORING</span><div className="tags">{['Python', 'Django', 'React', 'PostgreSQL'].map(tag => <span key={tag}>{tag}</span>)}</div>
      </aside>
    </div></section>
    <div className="education-strip"><div className="container"><span>CALIFORNIA STATE UNIVERSITY, MONTEREY BAY</span><strong>B.S. in Computer Science</strong><span>Learning with purpose. Building toward what's next.</span></div></div>
    <section className="section container program-grid">
      <div><SectionHeading eyebrow="THE FOUNDATION" title="CSUMB Computer Science Program" /><p className="prose">{program.description}</p><a className="text-link" href={program.url}>Explore the official CSUMB program <span aria-hidden="true">↗</span></a></div>
      <div className="outcomes"><h2>Program Learning Outcomes</h2><p className="muted">A student-friendly synthesis of program learning areas, rather than the exact published outcomes.</p><ol>{program.learningAreas.map(area => <li key={area}>{area}</li>)}</ol></div>
    </section>
    <section className="section goals-section"><div className="container goals-grid"><SectionHeading eyebrow="LOOKING AHEAD" title="My Goals">A foundation in computer science. A future in software engineering.</SectionHeading><ol className="goals-list">{profile.goals.map(goal => <li key={goal}>{goal}</li>)}</ol></div></section>
    <section className="section container"><div className="section-top"><SectionHeading eyebrow="THE ACADEMIC PORTFOLIO" title="Explore my coursework">14 required courses, from computing foundations to capstone.</SectionHeading><Link className="text-link" to="/courses">View all courses <span aria-hidden="true">→</span></Link></div><div className="course-grid">{['cst-300', 'cst-338', 'cst-363'].map(slug => <CourseCard key={slug} course={courses.find(course => course.slug === slug)} />)}</div></section>
  </>
}
