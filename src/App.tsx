import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useInterval } from '@mantine/hooks'
import dayjs, { Dayjs } from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import isoWeek from 'dayjs/plugin/isoWeek'
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(isoWeek)
dayjs.extend(utc)
dayjs.extend(dayOfYear)
// dayjs.extend(timezone)

/**
 * returns `new Date()` every interval
 *
 * @param interval interval in ms
 * @returns date object
 */
export const useDate = (interval: number = 1000): Date => {
  const [date, setDate] = useState(new Date())
  const { start } = useInterval(() => setDate(new Date()), interval)

  useEffect(() => start())

  return date
}

export const useDayjs = (interval: number = 1000): Dayjs => {
  const date = useDate(interval)
  return dayjs(date)
}

export const pad = (n: number, length: number): string =>
  n.toString().padStart(length, '0')

export const IsoDate = (date: Dayjs | Date) => {
  const d = dayjs(date)

  const week = pad(d.isoWeek(), 2)
  const weekDay = pad(d.isoWeekday(), 2)
  const weekYear = d.isoWeekYear()
  const dayOfYear = pad(d.dayOfYear(), 3)

  return {
    date: d.format('YYYY-MM-DD'),
    datetime: d.toISOString(),
    week: `${weekYear}-W${week}`,
    weekday: `${weekYear}-W${week}-${weekDay}`,
    ordinal: `${weekYear}-${dayOfYear}`,
  }
}

export const App = () => {
  const dayjs = useDayjs()
  const utc = dayjs.utc(true)
  const { date, datetime, week, weekday, ordinal } = IsoDate(dayjs)

  return (
    <div className='App'>
      <h1>{date}</h1>
      <h2>{datetime}</h2>
      <h3>{week}</h3>
      <h4>{weekday}</h4>
      <h5>{ordinal}</h5>
    </div>
  )
}

export default App
