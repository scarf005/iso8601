import { expect, test } from 'vitest'
import { isoDate } from './isoDate'
import dayjs from 'dayjs'

const days = [...Array(7).keys()]
  .map(x => dayjs(`2023-02-${x + 6}`))
  .map(x => ({
    weekday: x.isoWeekday(),
    weekdayStr: x.toDate().toLocaleString('en-US', { weekday: 'long' }),
    date: x.format('YYYY-MM-DD'),
  }))

test.each(days)('$date is $weekdayStr', ({ date, weekday }) => {
  const { weekday: result } = isoDate(dayjs.utc(`${date}T00:00:00Z`))

  expect(result).toBe(`2023-W06-${weekday}`)
})
