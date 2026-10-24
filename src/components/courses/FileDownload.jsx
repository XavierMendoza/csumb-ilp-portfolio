import { useId, useState } from 'react'
import { fetchEvidenceFile } from '../../utils/evidenceFiles'

export default function FileDownload({ url, children, className }) {
  const [status, setStatus] = useState('idle')
  const statusId = useId()

  async function download(event) {
    // Preserve normal browser actions such as opening a link in another tab.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    if (new URL(url, window.location.href).origin !== window.location.origin) return
    event.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    try {
      const { blob } = await fetchEvidenceFile(url)
      const objectUrl = URL.createObjectURL(new Blob([blob], { type: 'application/octet-stream' }))
      const link = document.createElement('a')
      link.href = objectUrl
      link.download = new URL(url, window.location.href).pathname.split('/').pop()
      document.body.append(link)
      link.click()
      link.remove()
      // Give the browser time to consume the blob before releasing it.
      setTimeout(() => URL.revokeObjectURL(objectUrl), 60000)
      setStatus('ready')
    } catch {
      setStatus('error')
    }
  }

  return <>
    <a className={className} href={url} download onClick={download}
      aria-describedby={statusId} aria-disabled={status === 'loading'}>{children}</a>
    <span id={statusId} className="file-status" role={status === 'error' ? 'alert' : 'status'}>
      {status === 'loading' && 'Preparing download…'}
      {status === 'ready' && <>Download requested. Check your browser’s downloads. If nothing appears, <a href={url} target="_blank" rel="noopener noreferrer">open the file directly</a>.</>}
      {status === 'error' && <>The file could not be downloaded. Try the link again, or <a href={url} target="_blank" rel="noopener noreferrer">open the file directly</a>.</>}
    </span>
  </>
}
