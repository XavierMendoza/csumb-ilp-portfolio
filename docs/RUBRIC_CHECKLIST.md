# Rubric checklist — Final polish

No grade is claimed. The student has personally reviewed and verified all nine reflections and approved the coursework for publication. All 12 non-capstone courses now have completed coursework evidence. The instructor determines academic sufficiency and the final score.

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
| CST 300 | `/courses/cst-300` | Student-verified reflection, 145 words; complete |
| CST 338 | `/courses/cst-338` | Student-verified reflection, 149 words; complete |
| CST 363 | `/courses/cst-363` | Student-verified reflection, 146 words; complete |
| CST 334 | `/courses/cst-334` | Student-verified reflection, 147 words; complete |
| CST 311 | `/courses/cst-311` | Student-verified reflection, 151 words; complete |
| CST 336 | `/courses/cst-336` | Student-verified reflection, 153 words; complete |
| CST 370 | `/courses/cst-370` | Authentic supplied Java algorithms evidence and README preserved |
| CST 462S | `/courses/cst-462s` | Student-verified reflection, 153 words; complete |
| CST 328 | `/courses/cst-328` | Student-verified reflection, 152 words; complete |
| CST 438 | `/courses/cst-438` | Supplied lab explanation and eight Java source excerpts integrated |
| CST 315 | `/courses/cst-315` | Authentic supplied Python lab and three attachments preserved |
| CST 329 | `/courses/cst-329` | Student-verified reflection, 152 words; complete |
| CST 489 | `/courses/cst-489` | Dedicated page and catalog description; evidence deferred to Week 16 |
| CST 499 | `/courses/cst-499` | Dedicated page and catalog description; evidence deferred to Week 16 |

## Evidence — 10 possible points

- Three courses have authentic supplied artifacts: CST 315, CST 370, CST 438. Academic sufficiency remains subject to instructor review.
- Exactly nine courses have student-verified first-person reflections of at least 120 words. The student explicitly confirmed that these accurately represent personal coursework. Their text and word counts are unchanged. Evidence records are marked verified, and all 12 non-capstone course statuses are complete. Public draft notices and repeated completion badges have been removed.
- CST 438 consists of selected excerpts, not a complete runnable application. The context test is displayed as source; it was not executed as a Spring application.
- No fabricated files, projects, service placements, grades, or capstone artifacts were added.
- CST 489 and CST 499 remain deferred under the supplied Week 16 exception.

## Verification and submission gates

- Build, lint, six Node regression tests, and diff whitespace checks pass.
- Reproduce word counts and file checks with `node --test tests/*.test.js` (whitespace-delimited words).
- All 14 local file responses returned 200 and matched originals byte-for-byte; no HTML fallback accepted.
- Python, algorithms Java, and all eight Spring Java previews loaded in the browser. All 14 download actions produced feedback. Saved-file delivery remains unconfirmed in the in-app browser.
- Student verification of the nine reflections is complete. Retain the existing personal/program summary review items above and instructor assessment of rubric suitability.
- Add capstone artifacts by Week 16 as required.
- Senior engineer must review before any commit, push, or deployment. After authorized deployment, repeat direct-route refresh, all asset URL, and ordinary-browser download checks on Vercel.

Projects remain optional and contain no invented work. Styling changes do not establish content verification or a guaranteed grade.

## Final presentation cleanup

Removed public verification warnings and unused warning styling; completed course cards no longer repeat evidence-status badges. Updated the directory, About, and Projects presentation without inventing projects or contact information. Capstone pages retain deferred data status and now say: “Capstone work and supporting materials will be showcased as the project progresses.” The CST 438 excerpt limitation remains accurate. Prior phase reports remain historical records; their draft-status descriptions have been superseded by the student confirmation recorded here. No commit, push, or deployment is authorized by this cleanup.

Final-polish validation: build, lint, all six regression tests and `git diff --check` passed. Compared course records against the starting Git version: only approved status fields changed; reflections, word counts, catalog descriptions, and source evidence are preserved. Browser checks covered all 14 course pages, Home, About, Projects, the directory, and custom 404; no obsolete verification notices were found. All ten source previews loaded and all 14 file actions reached download feedback. Mobile reflection layout and directory navigation were checked at 390px. Saved-file delivery and post-deployment production testing remain the open technical checks described above.
