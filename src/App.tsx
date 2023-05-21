import { Helmet, HelmetProvider } from "react-helmet-async"

import { isoDate } from "./isoDate.ts"
import { clockHours } from "./ClockIcon.tsx"
import { useDayjs } from "./useDayjs.tsx"
import "./App.css"

export const App = () => {
  const dayjs = useDayjs()
  const { date, time, datetime, week, weekday, ordinal } = isoDate(dayjs)

  return (
    <HelmetProvider>
      <Helmet defer={false}>
        <title>{time}</title>
        <link rel="icon" type="image/svg+xml" href={clockHours(dayjs.hour())} />
      </Helmet>
      <main className="App">
        <h1>{date}</h1>
        <h2>{datetime}</h2>
        <h3>{week}</h3>
        <h4>{weekday}</h4>
        <h5>{ordinal}</h5>
      </main>
    </HelmetProvider>
  )
}

export default App
