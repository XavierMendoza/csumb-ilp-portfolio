# Phase 2 — Course evidence

Added the supplied descriptions verbatim and linked authentic assignments:
- CST 315: Lab 1 — Substitution Cipher Frequency Analysis; 120 words, Python source, ciphertext, plaintext, and substitution key.
- CST 370: Homework 6 — Maximum Coins on a Grid (Dynamic Programming); 139 words, Java source and assignment README.

Both evidence statuses are `added`. Ten other non-capstone courses still need evidence; CST 489 and CST 499 remain deferred until Week 16. No grade is claimed. Catalog descriptions and all other course records are unchanged.

## Files changed

- `src/data/courses.js`: two code evidence records with descriptions and associated artifacts.
- `src/components/courses/EvidenceSection.jsx`: support code evidence and paragraph-separated descriptions while retaining PDF, image, link, and reflection rendering.
- `src/components/courses/CodePreview.jsx` (new): native disclosure, lazy fetch, loading/error states, abort on unmount, text-only code rendering, scrollable keyboard-accessible preview, and download link. Close/reopen retries failures. HTML fallback responses and empty files are rejected.
- `src/styles/components.css`: source preview and artifact list styling.
- `src/pages/Courses.jsx`: replace the outdated all-evidence-pending notice.
- `docs/RUBRIC_CHECKLIST.md`: current two-course evidence status and ten remaining courses.
- `README.md`: document the code evidence schema and current content status.
- `docs/PHASE_2_REPORT.md` (new): this report.

No artifact file was modified. No dependencies, commits, deployment, compiled Java artifacts, or unrelated files were added.

## Verification

- `npm run build`: passed.
- `npm run lint`: passed without errors or warnings.
- Both supplied descriptions exceed 100 whitespace-separated words and retain the exact supplied wording.
- Browser: both course pages, Python and Java preview text, keyboard opening of the Java disclosure, mobile widths (390px) with no page overflow, and screenshot inspection of mobile Python evidence and desktop Java evidence.
- Browser: both Download Code links produced download events. Downloaded copies were not opened or executed.
- All six public URLs returned HTTP 200, with response bytes identical to the original files and the production-build copies. SHA-256 values match those recorded before implementation, including both source files.
- No captured browser console errors/warnings during the successful preview/download checks.

Artifact URLs verified:

```text
/documents/courses/cst-315/substitution_analysis.py
/documents/courses/cst-315/ciphertext.txt
/documents/courses/cst-315/plaintext.txt
/documents/courses/cst-315/secret_key.txt
/documents/courses/cst-370/Main_hw6_1.java
/documents/courses/cst-370/README.md
```

## Limitations and review notes

The in-app browser blocked direct navigation to a plain-text artifact with `ERR_BLOCKED_BY_CLIENT`; artifact delivery was verified through HTTP byte comparison instead. This restriction did not prevent either source preview or the two download events. Actual file-saving behavior can vary by browser preferences. Failure/loading states are implemented but were not tested through injected network failures. Existing PDF/image/reflection branches were preserved, not exhaustively retested in this phase. The coursework programs were inspected but not executed or altered. Production hosting remains untested because no deployment was performed.

The instructor should review academic sufficiency. Ready for senior-engineer review before commits or deployment.
