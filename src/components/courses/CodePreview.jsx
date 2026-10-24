import { useEffect, useState } from 'react'
import FileDownload from './FileDownload'
import { fetchEvidenceFile } from '../../utils/evidenceFiles'

function SourceText({ url, language }) {
  const [result, setResult] = useState({ status: 'loading', text: '' })

  useEffect(() => {
    const controller = new AbortController()
    async function loadSource() {
      try {
        const { text } = await fetchEvidenceFile(url, controller.signal)
        setResult({ status: 'ready', text })
      } catch (error) {
        if (error.name !== 'AbortError') setResult({ status: 'error', text: '' })
      }
    }
    loadSource()
    return () => controller.abort()
  }, [url])

  if (result.status === 'loading') return <p role="status">Loading source code…</p>
  if (result.status === 'error') return <p role="alert">The code preview could not be loaded. Close and reopen it to retry, or use the file link below.</p>
  return <pre className="code-preview" tabIndex={0} aria-label={`${language} source code`}><code>{result.text}</code></pre>
}

export default function CodePreview({ url, language }) {
  const [open, setOpen] = useState(false)
  return <div className="code-evidence">
    <details onToggle={event => setOpen(event.currentTarget.open)}>
      <summary>View Code · {language}</summary>
      {open && <SourceText key={url} url={url} language={language} />}
    </details>
    <FileDownload className="text-link" url={url}>Download Code · {language}</FileDownload>
  </div>
}
