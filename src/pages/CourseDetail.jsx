import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import EvidenceSection from '../components/courses/EvidenceSection'
import NotFound from './NotFound'
export default function CourseDetail() {
  const { slug } = useParams()
  const course = courses.find(item => item.slug === slug)
  if (!course) return <NotFound />
  return <div className="container page course-detail"><Link className="back-link" to="/courses">← Back to Courses</Link><header className="page-header"><p className="eyebrow">{course.code} <span className="meta-divider">/</span> {course.units} {course.units === 1 ? 'UNIT' : 'UNITS'}{course.isCapstone && ' / CAPSTONE'}</p><h1>{course.title}</h1></header><section className="description-section" aria-labelledby="description-heading"><h2 id="description-heading">Course Description</h2><p className="catalog-description">{course.description}</p><p className="source-note">CSUMB catalog description · Transcribed from student-supplied catalog screenshots.</p></section><EvidenceSection course={course} /><Link className="text-link" to="/courses">← View all 14 courses</Link></div>
}
