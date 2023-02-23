import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useInterval } from '@mantine/hooks'
import { isoDate } from './isoDate'
import dayjs, { Dayjs } from 'dayjs'
import { useTitle } from './useTitle'

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

export const App = () => {
  const dayjs = useDayjs()
  const { date, time, datetime, week, weekday, ordinal } = isoDate(dayjs)
  useTitle(time)

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
