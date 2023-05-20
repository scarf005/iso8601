import { expect, test } from 'vitest'
import { isoDate } from './isoDate.ts'
import dayjs from 'dayjs'

const simpleDatetime = '2023-02-02T11:09:37'
const isoDate2023_02_02 = {
  date: '2023-02-02',
  week: '2023-W05',
  weekday: '2023-W05-4',
  ordinal: '2023-033',
}

test('UTC timestamp', () => {
  // by default, dayjs uses the local timezone
  const result = dayjs.utc(`${simpleDatetime}Z`)
  const expected = {
    ...isoDate2023_02_02,
    datetime: '2023-02-02T11:09:37+00:00',
  }

  expect(isoDate(result)).toEqual(expected)
})

test.runIf(dayjs.tz.guess() === 'Asia/Seoul')(
  'Local(Asia/Seoul) timestamp',
  () => {
    const result = dayjs('2023-02-02T11:09:37')
    const expected = {
      ...isoDate2023_02_02,
      datetime: '2023-02-02T11:09:37+09:00',
    }

    expect(isoDate(result)).toEqual(expected)
  },
)

test('Local(America/New_York) timestamp', () => {
  const result = dayjs.tz(`${simpleDatetime}Z`, 'America/New_York')

  const expected = {
    ...isoDate2023_02_02,
    datetime: '2023-02-02T11:09:37-05:00',
  }

  expect(isoDate(result)).toEqual(expected)
})
