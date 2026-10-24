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
    </div> : <div className="evidence-list">{evidence.map((item, index) => <article className={`evidence-item evidence-${item.type}`} key={`${item.title}-${index}`}>
      <h3>{item.title}</h3>
      {item.status === 'draft' && <p className="draft-notice"><strong>Draft · Student verification required</strong><br />Based on course topics and supplied context. This reflection must be checked for personal accuracy before it counts as completed coursework evidence.</p>}
      {item.description && <div className="evidence-description">{item.description.split(/\n\s*\n/).map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>}
      {item.type === 'code' && <>
        <p className="source-note">Language: {item.language} · Technique: {item.technique}</p>
        {item.note && <p className="evidence-note">{item.note}</p>}
        {item.files?.length ? <div className="source-groups">{[...new Set(item.files.map(file => file.group))].map(group => <section className="source-group" key={group}>
          <h4>{group}</h4>
          {item.files.filter(file => file.group === group && file.title && validUrl(file.url)).map(file => <div className="source-file" key={file.url}>
            <h5>{file.title}</h5><CodePreview url={file.url} language={item.language} filename={file.title} />
          </div>)}
        </section>)}</div> : <CodePreview url={item.url} language={item.language} />}
        {item.attachments?.length > 0 && <ul className="artifact-links">{item.attachments.filter(file => file.title && validUrl(file.url)).map(file => <li key={file.url}><FileDownload url={file.url}>{file.title}</FileDownload></li>)}</ul>}
      </>}
      {item.type === 'reflection' && <div className="reflection">{item.content.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>}
      {item.type === 'image' && <a href={item.url}><img loading="lazy" src={item.url} alt={item.alt || item.description || item.title} /></a>}
      {item.type === 'pdf' && <details><summary>Preview PDF: {item.title}</summary><object data={item.url} type="application/pdf" aria-label={item.title}><p>Preview unavailable. Use the PDF link below.</p></object></details>}
      {!['reflection', 'code'].includes(item.type) && <a className="text-link" href={item.url}>{item.type === 'pdf' ? 'Open PDF' : item.type === 'image' ? 'Open full image' : 'View resource'} <span aria-hidden="true">↗</span></a>}
    </article>)}</div>}
  </section>
}
