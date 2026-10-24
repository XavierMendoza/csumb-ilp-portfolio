import CodePreview from './CodePreview'
import FileDownload from './FileDownload'

// Restrict content URLs to web addresses or root-relative local assets.
function validUrl(url) {
  return typeof url === 'string' && (/^https?:\/\/[^\s]+$/i.test(url) || /^\/(?!\/)[^\s]+$/.test(url))
}
export default function EvidenceSection({ course }) {
  const evidence = course.evidence.filter(item => item.title && (
    item.type === 'reflection' ? item.content?.trim() : ['pdf', 'image', 'link', 'code'].includes(item.type) && validUrl(item.url)
  ))
  return <section className="evidence-section" aria-labelledby="evidence-heading">
    <h2 id="evidence-heading">Coursework &amp; Evidence</h2>
    {evidence.length === 0 ? <div className="empty-state">
      <span className="eyebrow">{course.isCapstone ? 'CAPSTONE CONTENT DEFERRED' : 'EVIDENCE PENDING'}</span>
      <h3>{course.isCapstone ? 'Capstone work will be added later.' : 'Coursework will be added here.'}</h3>
      <p>{course.isCapstone ? 'Content for CST 489 and CST 499 may remain incomplete until Week 16 under the instructor’s capstone exception.' : 'A final project, major assignment, or a verified reflection of at least 100 words will document work completed in this course.'}</p>
    </div> : <div className="evidence-list">{evidence.map((item, index) => <article className="evidence-item" key={`${item.title}-${index}`}>
      <h3>{item.title}</h3>
      {item.description && <div className="evidence-description">{item.description.split(/\n\s*\n/).map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>}
      {item.type === 'code' && <>
        <p className="source-note">Language: {item.language} · Technique: {item.technique}</p>
        <CodePreview url={item.url} language={item.language} />
        {item.attachments?.length > 0 && <ul className="artifact-links">{item.attachments.filter(file => file.title && validUrl(file.url)).map(file => <li key={file.url}><FileDownload url={file.url}>{file.title}</FileDownload></li>)}</ul>}
      </>}
      {item.type === 'reflection' && <div className="reflection">{item.content}</div>}
      {item.type === 'image' && <a href={item.url}><img loading="lazy" src={item.url} alt={item.alt || item.description || item.title} /></a>}
      {item.type === 'pdf' && <details><summary>Preview PDF: {item.title}</summary><object data={item.url} type="application/pdf" aria-label={item.title}><p>Preview unavailable. Use the PDF link below.</p></object></details>}
      {!['reflection', 'code'].includes(item.type) && <a className="text-link" href={item.url}>{item.type === 'pdf' ? 'Open PDF' : item.type === 'image' ? 'Open full image' : 'View resource'} <span aria-hidden="true">↗</span></a>}
    </article>)}</div>}
  </section>
}
