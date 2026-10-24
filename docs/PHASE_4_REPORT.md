# Phase 4 implementation report

## Summary and initial state

Continued the existing React + Vite application without changing the routing architecture or adding dependencies. At the start, Git showed only `public/documents/courses/cst-438/` as untracked; those eight files were user-supplied. The preceding preview/download repair was already tracked and was retained. No commits, pushes, or deployments were performed. The separate Isaiah portfolio was not accessed or modified.

## CST 438 evidence

Added “Lab 1 — Spring Boot REST API and Customer Management System” with the complete supplied three-paragraph explanation and Java / Spring Boot labels. Eight source files are grouped into five purposes:

- Application entry point: `Lab1Application.java`
- REST controller: `CustomerController.java`
- Data transfer objects: `CustomerDTO.java`, `CustomerLoginDTO.java`, `OrderDTO.java`
- Database repositories: `CustomerRepository.java`, `OrderRepository.java`
- Application-context test: `Lab1ApplicationTests.java`

Each file has an initially collapsed preview and accessible download control. Filename-specific labels distinguish the controls. The page explicitly states that these are selected excerpts, not a complete runnable application. All eight supplied files were read for embedded credentials, tokens, private keys, and other sensitive material; no hardcoded secrets were identified. References to a token service, password encoder, and RSA configuration are code references, not supplied secret values. This review is not a security certification of the underlying application. Missing domain/configuration/service classes and dependencies prevent standalone execution; no claim is made that the Spring context test passes. Original source files were not edited.

## Reflection drafts

Centralized in `src/data/courses.js`, with evidence `status: draft` and course `evidenceStatus: draft`. Prominent student-verification notices and directory labels distinguish drafts from attached artifacts. The catalog descriptions are unchanged and remain separate. Reflections use paragraphs and do not link to fabricated assignments.

| Course | Title | Words |
| --- | --- | ---: |
| CST 300 | Graduation Writing Assessment for Computing and Design | 145 |
| CST 338 | Software Design | 149 |
| CST 363 | Introduction to Database Systems | 146 |
| CST 334 | Operating Systems | 147 |
| CST 311 | Introduction to Computer Networks | 151 |
| CST 336 | Internet Programming | 153 |
| CST 462S | Race, Gender, Class in the Digital World | 153 |
| CST 328 | Digital Art and Design | 152 |
| CST 329 | Reasoning with Logic | 152 |

Counts use `content.trim().split(/\s+/u).length`, reproduced by `node --test tests/*.test.js`. Every reflection exceeds 120 words. Drafts describe course topics and learning perspectives without inventing projects, grades, collaborators, experiments, or service placements. CST 329 incorporates only the supplied context about proofs and quantifiers. Student review must establish that the final wording accurately describes personal learning and completed work; topic coverage alone does not establish rubric completion.

## Visual refresh

Used navy, royal blue, cyan, indigo, amber, and light blue across the existing layout. The homepage now has a dark blue/indigo gradient, a noninteractive geometric backdrop, cyan name accent, and stronger calls to action. Course cards have a consistent four-accent sequence, distinct course-code labels, and hover/focus treatment. Page headers use light gradients. Code evidence, draft reflections, and review notices have distinct visual treatments. About education, interest tags, and contact sections inherit coordinated accents. Text retains dark foregrounds on light surfaces; bright cyan and amber serve as accents rather than low-contrast body text. No animation was added; the existing reduced-motion rule remains.

Biography, program description, learning-area synthesis, goals, Projects content, routes, and capstone notices are preserved. Homepage elements already satisfied the structural checklist, so their copy was not rewritten. Exact university-published outcomes have not been substituted for the clearly labeled synthesis.

## Files created and modified

Modified:
- `src/data/courses.js`: nine drafts and CST 438 evidence.
- `src/components/courses/EvidenceSection.jsx`: draft notices, paragraphs, grouped source files and evidence styles.
- `src/components/courses/CodePreview.jsx`: optional filename labels; existing fetch/loading/error/download behavior retained.
- `src/components/courses/CourseCard.jsx`: explicit draft status.
- `src/pages/Courses.jsx`: accurate evidence inventory.
- `src/styles/global.css`: palette tokens.
- `src/styles/components.css`: visual refresh, file groups and responsive styling.
- `tests/evidenceFiles.test.js`: byte-preservation coverage expanded to all 14 referenced files.
- `docs/RUBRIC_CHECKLIST.md`: honest implementation and verification statuses.

Created:
- `tests/courseContent.test.js`: course uniqueness, reflection word counts/statuses, capstone preservation and artifact availability checks.
- `docs/PHASE_4_REPORT.md`: this report.

The eight user-supplied CST 438 files remain present and unmodified. `FileDownload.jsx`, `evidenceFiles.js`, Vercel configuration, and existing Python/Java coursework were not changed.

## Validation performed

- `npm run build`: passed.
- `npm run lint`: passed.
- `node --test tests/*.test.js`: six tests passed, including all 14 files, HTML fallback rejection, HTTP failures, empty bodies, network failures, and cancellation.
- `git diff --check`: passed.
- Compared all catalog codes, titles, slugs, descriptions, units and capstone flags against HEAD: unchanged. Entire CST 315 and CST 370 records also unchanged.
- All 14 local asset URLs returned HTTP 200 with byte-for-byte original content. Vite preview omits Content-Type for Python/Java; TXT is text/plain and README is text/markdown. Actual bodies, not status alone, were verified.
- Browser checked homepage, About, Projects, directory, all 14 course routes, and the custom 404 route. Directory contains 14 course cards. No horizontal overflow detected on desktop course pages.
- Python and algorithms Java previews loaded; all eight Spring Java previews loaded. Keyboard Enter toggled previews and activated downloads; mouse activation was also exercised. All 14 file actions reached download feedback. Loading status was observed during asynchronous source/file requests.
- At a 390px viewport, checked homepage, About, Projects, directory, a reflection page, all three code-evidence pages, and both capstone pages for overflow. Inspected mobile source-list and course-directory screenshots. Existing source blocks scroll internally.
- Mobile menu opens by keyboard and mouse, Escape closes it, and selecting Courses navigates and closes the menu. Temporary viewport override reset afterward.

## Remaining gaps and technical concerns

The in-app browser does not establish that download requests result in files saved to disk. Ordinary-browser verification of saved filenames and contents remains required. Same-origin Blob downloads, timeout handling, accessible feedback, retry guidance, and direct-file fallback links remain in place; no claim is made that browser restrictions can be bypassed.

No production deployment or new production-file validation was performed in Phase 4. The previous phase verified the six older production files; the new eight files and redesigned application require production checks after an authorized deployment. All local file bodies have been validated.

Nine drafts require student verification before being treated as completed personal evidence. Existing biography, goals, program summary, and learning-area synthesis retain their prior review requirements. Capstone artifacts remain due under the supplied Week 16 exception. The senior engineer should review changes and ordinary-browser downloads before authorizing commit and deployment. No final grade is claimed.
