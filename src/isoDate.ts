import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import isoWeek from 'dayjs/plugin/isoWeek'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import timezone from 'dayjs/plugin/timezone'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(timezone)
dayjs.extend(isoWeek)
dayjs.extend(utc)
dayjs.extend(dayOfYear)
dayjs.extend(advancedFormat)

/**
 * left pad number with `0`.
 * `n - length` is the number of `0`s to pad
 *
 * @param n number to pad
 * @param length maximum length of number
 */
export const pad = (n: number, length: number): string =>
  n.toString().padStart(length, '0')

export const isoDate = (date: Dayjs | Date) => {
  const d = dayjs(date)

  const isoWeekDay = d.isoWeekday()
  const weekYear = d.isoWeekYear()
  const dayOfYear = pad(d.dayOfYear(), 3)

  const week = d.format('GGGG-[W]WW')

  return {
    date: d.format('YYYY-MM-DD'),
    datetime: d.format('YYYY-MM-DDTHH:mm:ssZ'),
    week,
    weekday: `${week}-${isoWeekDay}`,
    ordinal: `${weekYear}-${dayOfYear}`,
  }
}
