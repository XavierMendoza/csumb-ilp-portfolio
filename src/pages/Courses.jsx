import { courses } from '../data/courses'
import CourseCard from '../components/courses/CourseCard'
export default function Courses() {
  const sorted = [...courses].sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }))
  return <div className="container page"><header className="page-header"><p className="eyebrow">INDIVIDUAL LEARNING PORTFOLIO</p><h1>Course Directory<span className="accent">.</span></h1><p className="page-lead">The foundations, systems, and practices behind a Computer Science education.</p></header><div className="directory-note"><strong>14 required courses</strong><p>Explore course descriptions, learning reflections, and selected assignments across my Computer Science education. Follow the capstone pages as the projects progress.</p></div><div className="course-grid">{sorted.map(course => <CourseCard key={course.slug} course={course} />)}</div></div>
}
