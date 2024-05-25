import { useEffect, useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { useInterval } from "@mantine/hooks"

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

/**
 * returns `dayjs` every interval
 *
 * @param interval interval in ms
 * @returns dayjs object
 */
export const useDayjs = (interval: number = 1000): Dayjs => {
  const date = useDate(interval)
  return dayjs(date)
}
