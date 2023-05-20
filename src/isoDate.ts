import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import isoWeek from 'dayjs/plugin/isoWeek.js'
import dayOfYear from 'dayjs/plugin/dayOfYear.js'
import timezone from 'dayjs/plugin/timezone.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'

dayjs.extend(timezone)
dayjs.extend(isoWeek)
dayjs.extend(utc)
dayjs.extend(dayOfYear)
dayjs.extend(advancedFormat)

type IsoDates = {
  date: string
  time: string
  datetime: string
  week: string
  weekday: string
  ordinal: string
}

export const isoDate = (input: Dayjs | Date): IsoDates => {
  const d = dayjs(input)

  const isoWeekDay = d.isoWeekday()
  const weekYear = d.isoWeekYear()
  const dayOfYear = d.dayOfYear().toString().padStart(3, "0")
  const week = d.format('GGGG-[W]WW')
  const date = d.format('YYYY-MM-DD')
  const time = d.format('HH:mm:ss')
  const zone = d.format('Z')

  return {
    date,
    time,
    datetime: `${date}T${time}${zone}`,
    week,
    weekday: `${week}-${isoWeekDay}`,
    ordinal: `${weekYear}-${dayOfYear}`,
  }
}
