import { dayOfYear, weekOfYear } from "https://esm.sh/jsr/@std/datetime@0.224.0"

const p2 = (n: number) => n.toString().padStart(2, "0")

export const isoDatetime = (t: Date) => t.toISOString()

/** `YYYY-MM-DD` */
export const isoDate = (t: Date) =>
	`${t.getFullYear()}-${p2(t.getMonth() + 1)}-${p2(t.getDate())}`

export const utcTime = (t: Date) =>
	[t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds()].map(p2).join(":")

export const isoWeek = (t: Date) => `${t.getFullYear()}-W${weekOfYear(t)}`
export const isoWeekday = (t: Date) =>
	`${t.getFullYear()}-W${weekOfYear(t)}-${(t.getDay() + 6) % 7 + 1}`
export const isoOrdinal = (t: Date) =>
	`${t.getFullYear()}-${dayOfYear(t).toString().padStart(3, "0")}`
