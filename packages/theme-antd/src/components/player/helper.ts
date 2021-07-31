import { Chapter } from '../../models/video'
import { Marks } from './models'

export const formatDuration = (seconds: number): string =>
  new Date(seconds * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]

export const toInt = (n: number): number => Math.trunc(n)

export const createChapterMarks = (chapters: Chapter[]): Marks => {
  let marks = {}

  chapters.forEach(
    ({ start, title }) => (marks[start] = title.substring(0, 10) + '...')
  )
  return marks
}
