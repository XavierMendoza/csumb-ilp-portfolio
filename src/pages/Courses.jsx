import { courses } from '../data/courses'
import CourseCard from '../components/courses/CourseCard'
export default function Courses() {
  const sorted = [...courses].sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }))
  return <div className="container page"><header className="page-header"><p className="eyebrow">INDIVIDUAL LEARNING PORTFOLIO</p><h1>Course Directory<span className="accent">.</span></h1><p className="page-lead">The foundations, systems, and practices behind a Computer Science education.</p></header><div className="directory-note"><strong>14 required courses</strong><p>Each page includes the supplied CSUMB catalog description and a space for coursework. Evidence is supplied for CST 315 and CST 370; ten other non-capstone courses await evidence. Capstone content is deferred until Week 16.</p></div><div className="course-grid">{sorted.map(course => <CourseCard key={course.slug} course={course} />)}</div></div>
}
