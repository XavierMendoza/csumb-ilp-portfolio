// Validate text evidence before previewing it or offering it as a download.
export async function fetchEvidenceFile(url, signal) {
  const response = await fetch(url, {
    signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(15000)]) : AbortSignal.timeout(15000),
  })
  if (!response.ok) throw new Error(`File request failed (${response.status}).`)
  const blob = await response.blob()
  const text = await blob.text()
  if (response.headers.get('content-type')?.includes('text/html') ||
      !text.trim() || /^\s*(<!doctype html|<html)/i.test(text)) {
    throw new Error('The server did not return the requested file.')
  }
  return { blob, text }
}
