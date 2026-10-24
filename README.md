# Xavier Mendoza — CSUMB ILP Portfolio

A React, Vite, JavaScript, React Router, and plain CSS academic portfolio. Phase 1 includes all 14 required course pages and supplied catalog descriptions. Phase 2 adds authentic CST 315 and CST 370 evidence; ten other non-capstone courses await evidence and the two capstones remain deferred. Projects remain empty. No backend, additional dependencies, deployment, or commits were introduced.

## Run locally

Use a Node.js version supported by the installed Vite 8 release (Node 22.12+ recommended), and npm.

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run preview
```

Open the URL printed by Vite. The production build is written to `dist/`. Preview serves that build locally; rerun build after edits before previewing.

## Structure

```text
src/
  components/
    layout/       Navbar, Footer, shared Layout
    courses/      CourseCard, EvidenceSection
    ui/           SectionHeading
  pages/          Home, About, Projects, Courses, CourseDetail, NotFound
  data/           courses.js, projects.js, profile.js
  styles/         global.css, components.css
  App.jsx         Route declarations
  main.jsx        React entry point
public/
  images/         profile/, projects/, branding/
  documents/      courses/
docs/
  RUBRIC_CHECKLIST.md
  IMPLEMENTATION_REPORT.md
vercel.json       SPA routing fallback
```

Routes: `/`, `/about`, `/projects`, `/courses`, and `/courses/:slug`. Invalid course slugs and unknown paths display the custom 404 page. Courses are displayed in course-number order without invented term assignments.

## Editing content

- `src/data/profile.js`: student introduction, education, goals, technical interests, optional photo, and contact links. Interests are learning areas, not assertions of professional expertise.
- `src/data/courses.js`: the authoritative set of 14 course records, descriptions, and evidence. Descriptions are preserved from the student-provided catalog transcriptions. `isCapstone` identifies CST 489 and CST 499.
- `src/data/projects.js`: verified project records. Leave empty until real projects are supplied.

The homepage program paragraph is the supplied draft. Learning areas are explicitly labeled as a synthesis rather than exact official outcomes. Program context links to https://csumb.edu/academics/programs-degrees/computer-science-online/.

### Add course evidence

Place PDFs in `public/documents/courses/`, images in `public/images/projects/`, and reference them with root-relative URLs (omit `public`). Create these folders if a source archive does not retain empty directories. Set a course's `evidenceStatus` to `added` after adding verified content; `pending` is the initial non-capstone state, `deferred` the initial capstone state. Status is editorial metadata, not an automatic claim that evidence meets the rubric. Remove the Week 16 card wording when capstone evidence is finalized.

Each evidence record supports `type`, `title`, `description`, `url`, `content`, and image `alt`. The `code` type also supports `language`, `technique`, and `attachments: [{ title, url }]`. Code previews fetch local public source files on opening, render plain text with preserved indentation, and provide a same-origin download link. Closing and reopening retries a failed load. See the CST 315 and CST 370 records for actual examples. Examples below are schema illustrations only and must be replaced with actual verified work and existing assets before publishing:

```js
{ type: 'pdf', title: 'Actual assignment title', description: 'Verified project description', url: '/documents/courses/actual-file.pdf' }
{ type: 'image', title: 'Actual artifact title', description: 'What this artifact shows', url: '/images/projects/actual-file.png', alt: 'Specific description of the visible assignment' }
{ type: 'link', title: 'Actual project repository', description: 'Verified final project description', url: 'https://github.com/actual-owner/actual-repository' }
{ type: 'reflection', title: 'Course reflection', content: 'Student-verified account of completed coursework goes here.' }
```

PDF previews use a native, collapsed `<details>` containing an `<object>` with a direct PDF link available independently. Browser PDF support and remote embedding permissions vary. Images have alt text and a full-image link. Links support GitHub and other web resources. Reflections preserve paragraph line breaks and render as text, not raw HTML. Unknown types or missing required content are omitted; an empty usable evidence set shows the pending state. URLs for evidence must be HTTP(S) or root-relative local assets. The renderer does not check remote resource availability or assess academic sufficiency. Verify every artifact URL and reflection yourself. Reflections used in place of artifacts must contain at least 100 words of work actually completed.

### Add projects and profile media

```js
// projects.js: add verified entries to the exported array
{
  name: 'Actual project name',
  description: 'Verified description of the project',
  technologies: ['Python', 'React'],
  screenshot: { url: '/images/projects/actual-file.png', alt: 'Specific screenshot description' },
  githubUrl: 'https://github.com/actual-owner/actual-repository',
  liveUrl: 'https://actual-app.example'
}
```

Omit optional screenshots and URLs until available. Add the profile photo with `photo: { url: '/images/profile/actual-photo.jpg', alt: 'Portrait of Xavier Mendoza' }`. Add confirmed links with `contactLinks: [{ label: 'GitHub', url: 'https://github.com/actual-account' }]`; email links may use `mailto:`. No contact details or personal photograph are fabricated.

## Static hosting readiness

Vercel can build with `npm run build` and serve `dist`. `vercel.json` rewrites extensionless routes to `index.html` for BrowserRouter while leaving asset paths with file extensions alone. Current course slugs contain no dots. Missing routes display a client-side 404 with an HTTP 200 response, which is normal for this SPA. Do not deploy until senior-engineer review; production rewrite behavior still requires verification on the actual host.

## Review and verification

See `docs/RUBRIC_CHECKLIST.md` for content status and `docs/PHASE_2_REPORT.md` for current evidence verification. The historical `docs/IMPLEMENTATION_REPORT.md` contains the Phase 1 file inventory, verification performed, limitations, and review decisions. Build and lint do not establish that the academic evidence requirement is met.
