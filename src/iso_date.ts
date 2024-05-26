import { dayOfYear, format, weekOfYear } from "@std/datetime@0.224.0"

const timeZoneOffset = (t: Date) => {
	const offset = t.getTimezoneOffset()
	const hours = Math.abs(Math.floor(offset / 60)).toString().padStart(2, "0")
	const minutes = Math.abs(offset % 60).toString().padStart(2, "0")
	const sign = offset < 0 ? "+" : "-"

	return `${sign}${hours}:${minutes}`
}

export const isoDatetime = (t: Date) =>
	format(t, "yyyy-MM-ddTHH:mm:ss") + timeZoneOffset(t)

export const isoDate = (t: Date) => format(t, "yyyy-MM-dd")

export const isoTime = (t: Date) => format(t, "HH:mm:ss")

export const isoWeek = (t: Date) => `${t.getFullYear()}-W${weekOfYear(t)}`

export const isoWeekday = (t: Date) =>
	`${t.getFullYear()}-W${weekOfYear(t)}-${(t.getDay() + 6) % 7 + 1}`

export const isoOrdinal = (t: Date) =>
	`${t.getFullYear()}-${dayOfYear(t).toString().padStart(3, "0")}`
