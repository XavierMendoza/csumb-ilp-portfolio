# Rubric checklist — Phase 4

No grade is claimed. Implemented drafts do not count as verified personal coursework evidence. The instructor determines academic sufficiency and the final score.

## Homepage — 5 possible points

| Requirement | Implementation | Remaining review |
| --- | --- | --- |
| Student name | Xavier Mendoza displayed | None identified |
| Short biography | Existing supplied introduction preserved | Student accuracy review |
| CSUMB program description | Existing summary and official program link preserved | Verify summary for submission |
| Program outcomes | Four learning areas displayed, explicitly labeled a student-friendly synthesis rather than exact published outcomes | Student/instructor must confirm rubric suitability |
| Academic and professional goals | All five supplied goals preserved | Student accuracy review |
| Access to courses | Hero CTA, navigation, featured cards, directory and footer | Implemented; all 14 routes browser-checked locally |

## Course pages — 10 possible points

Exactly 14 unique course URLs remain. Codes, titles, units, and catalog descriptions match the pre-change Git version. No catalog description was replaced by a reflection. Original catalog screenshots were not independently reverified in this phase.

| Course | Route | Evidence status |
| --- | --- | --- |
| CST 300 | `/courses/cst-300` | Draft reflection, 145 words; student verification required |
| CST 338 | `/courses/cst-338` | Draft reflection, 149 words; student verification required |
| CST 363 | `/courses/cst-363` | Draft reflection, 146 words; student verification required |
| CST 334 | `/courses/cst-334` | Draft reflection, 147 words; student verification required |
| CST 311 | `/courses/cst-311` | Draft reflection, 151 words; student verification required |
| CST 336 | `/courses/cst-336` | Draft reflection, 153 words; student verification required |
| CST 370 | `/courses/cst-370` | Authentic supplied Java algorithms evidence and README preserved |
| CST 462S | `/courses/cst-462s` | Draft reflection, 153 words; student verification required |
| CST 328 | `/courses/cst-328` | Draft reflection, 152 words; student verification required |
| CST 438 | `/courses/cst-438` | Supplied lab explanation and eight Java source excerpts integrated |
| CST 315 | `/courses/cst-315` | Authentic supplied Python lab and three attachments preserved |
| CST 329 | `/courses/cst-329` | Draft reflection, 152 words; student verification required |
| CST 489 | `/courses/cst-489` | Dedicated page and catalog description; evidence deferred to Week 16 |
| CST 499 | `/courses/cst-499` | Dedicated page and catalog description; evidence deferred to Week 16 |

## Evidence — 10 possible points

- Three courses have authentic supplied artifacts: CST 315, CST 370, CST 438. Academic sufficiency remains subject to instructor review.
- Exactly nine courses have first-person drafts based on catalog topics and supplied context. Each is at least 120 words; the course card and evidence panel explicitly identify draft status. These are not finished personal evidence until the student verifies their accuracy and relevance to work actually completed.
- CST 438 consists of selected excerpts, not a complete runnable application. The context test is displayed as source; it was not executed as a Spring application.
- No fabricated files, projects, service placements, grades, or capstone artifacts were added.
- CST 489 and CST 499 remain deferred under the supplied Week 16 exception.

## Verification and submission gates

- Build, lint, six Node regression tests, and diff whitespace checks pass.
- Reproduce word counts and file checks with `node --test tests/*.test.js` (whitespace-delimited words).
- All 14 local file responses returned 200 and matched originals byte-for-byte; no HTML fallback accepted.
- Python, algorithms Java, and all eight Spring Java previews loaded in the browser. All 14 download actions produced feedback. Saved-file delivery remains unconfirmed in the in-app browser.
- Review the nine reflections and existing personal/program summaries before claiming rubric completion.
- Add capstone artifacts by Week 16 as required.
- Senior engineer must review before any commit, push, or deployment. After authorized deployment, repeat direct-route refresh, all asset URL, and ordinary-browser download checks on Vercel.

Projects remain optional and contain no invented work. Styling changes do not establish content verification or a guaranteed grade.
