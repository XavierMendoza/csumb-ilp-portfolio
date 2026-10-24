import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { courses } from '../src/data/courses.js'

const draftCodes = ['CST 300', 'CST 338', 'CST 363', 'CST 334', 'CST 311', 'CST 336', 'CST 462S', 'CST 328', 'CST 329']
test('14 unique courses with descriptions and two deferred capstones', () => {
  assert.equal(courses.length, 14)
  assert.equal(new Set(courses.map(c => c.slug)).size, 14)
  assert.equal(new Set(courses.map(c => c.code)).size, 14)
  for (const c of courses) assert.ok(c.description.trim() && c.title.trim())
  assert.deepEqual(courses.filter(c => c.isCapstone).map(c => c.code), ['CST 489', 'CST 499'])
  for (const c of courses.filter(c => c.isCapstone)) {
    assert.equal(c.evidenceStatus, 'deferred')
    assert.deepEqual(c.evidence, [])
  }
})
test('exactly nine reflections remain drafts with at least 120 words each', () => {
  assert.deepEqual(courses.filter(c => c.evidenceStatus === 'draft').map(c => c.code).sort(), [...draftCodes].sort())
  for (const code of draftCodes) {
    const course = courses.find(c => c.code === code)
    assert.equal(course.evidence.length, 1)
    const reflection = course.evidence[0]
    assert.equal(reflection.type, 'reflection')
    assert.equal(reflection.status, 'draft')
    const count = reflection.content.trim().split(/\s+/u).length
    assert.ok(count >= 120, `${code}: ${count} words`)
    console.info(`${code}: ${count} words (draft)`)
    assert.equal(reflection.url, undefined)
  }
})
test('three authentic evidence courses reference all 14 supplied files', async () => {
  const evidenceCourses = courses.filter(c => c.evidenceStatus === 'added')
  assert.deepEqual(evidenceCourses.map(c => c.code).sort(), ['CST 315', 'CST 370', 'CST 438'])
  const paths = evidenceCourses.flatMap(c => c.evidence.flatMap(e => e.files ? e.files.map(f => f.url) : [e.url, ...(e.attachments || []).map(f => f.url)]))
  assert.equal(new Set(paths).size, 14)
  for (const path of paths) {
    assert.ok(path.startsWith('/documents/courses/'))
    const text = await readFile(`public${path}`, 'utf8')
    assert.ok(text.trim())
    assert.doesNotMatch(text, /^\s*(<!doctype html|<html)/i)
  }
  const spring = evidenceCourses.find(c => c.code === 'CST 438').evidence[0]
  assert.equal(spring.files.length, 8)
  assert.match(spring.note, /not a complete runnable application/)
})
