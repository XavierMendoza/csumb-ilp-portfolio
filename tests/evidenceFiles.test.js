import assert from 'node:assert/strict'
import { Buffer } from 'node:buffer'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { fetchEvidenceFile } from '../src/utils/evidenceFiles.js'

test('all six coursework downloads retain their exact bytes', async t => {
  for (const path of ['cst-315/substitution_analysis.py', 'cst-315/ciphertext.txt', 'cst-315/plaintext.txt', 'cst-315/secret_key.txt', 'cst-370/Main_hw6_1.java', 'cst-370/README.md']) {
    const bytes = await readFile(`public/documents/courses/${path}`)
    t.mock.method(globalThis, 'fetch', async () => new Response(bytes, { headers: { 'Content-Type': 'application/octet-stream' } }))
    const result = await fetchEvidenceFile(`/documents/courses/${path}`)
    assert.deepEqual(Buffer.from(await result.blob.arrayBuffer()), bytes)
    assert.equal(result.text, bytes.toString())
    t.mock.restoreAll()
  }
})

test('rejects errors, HTML fallbacks (including mislabeled HTML), and empty files', async t => {
  for (const response of [new Response('Not found', { status: 404 }), new Response('Error', { status: 500 }), new Response('<div>SPA</div>', { headers: { 'Content-Type': 'text/html' } }), new Response('<!doctype html><html>SPA</html>'), new Response('   ')]) {
    t.mock.method(globalThis, 'fetch', async () => response)
    await assert.rejects(fetchEvidenceFile('/missing.py'))
    t.mock.restoreAll()
  }
})

test('network errors and cancellation propagate to the UI', async t => {
  t.mock.method(globalThis, 'fetch', async (_url, { signal }) => {
    signal.throwIfAborted()
    throw new TypeError('Network request failed')
  })
  await assert.rejects(fetchEvidenceFile('/source.java'), /Network request failed/)
  const controller = new AbortController()
  controller.abort()
  await assert.rejects(fetchEvidenceFile('/source.java', controller.signal), { name: 'AbortError' })
})
