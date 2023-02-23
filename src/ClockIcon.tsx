import Clock1 from './assets/clock-hour-1.svg'
import Clock2 from './assets/clock-hour-2.svg'
import Clock3 from './assets/clock-hour-3.svg'
import Clock4 from './assets/clock-hour-4.svg'
import Clock5 from './assets/clock-hour-5.svg'
import Clock6 from './assets/clock-hour-6.svg'
import Clock7 from './assets/clock-hour-7.svg'
import Clock8 from './assets/clock-hour-8.svg'
import Clock9 from './assets/clock-hour-9.svg'
import Clock10 from './assets/clock-hour-10.svg'
import Clock11 from './assets/clock-hour-11.svg'
import Clock12 from './assets/clock-hour-12.svg'

// prettier-ignore
export const hoursSvg = [Clock1, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12]

export const clockHours = (hour: number) => {
  if (hour < 0 || hour > 23) {
    throw new Error('hour must be between 0 and 23')
  }

  const hour12 = hour > 12 ? hour - 12 : hour

  return hoursSvg[hour12 - 1]
}
