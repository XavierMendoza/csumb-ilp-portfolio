import { Link } from 'react-router-dom'
export default function CourseCard({ course }) {
  return <article className="course-card">
    <div className="card-meta"><span className="course-code">{course.code}</span><span>{course.units} {course.units === 1 ? 'unit' : 'units'}</span></div>
    <h3><Link to={`/courses/${course.slug}`}>{course.title}</Link></h3>
    <div className="card-bottom">{course.isCapstone && <span className="status">Capstone · In progress</span>}
    <Link to={`/courses/${course.slug}`} aria-label={`View ${course.code} course details`}>View course <span aria-hidden="true">↗</span></Link></div>
  </article>
}
