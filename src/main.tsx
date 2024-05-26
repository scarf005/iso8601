import "preact/debug"
import { render } from "preact"
import { effect, signal, useComputed } from "@preact/signals"
import {
	isoDate,
	isoDatetime,
	isoOrdinal,
	isoTime,
	isoWeek,
	isoWeekday,
} from "./iso_date.ts"
import { html } from "./preact.ts"

const now = signal(new Date())
effect(() => {
	const id = setInterval(() => now.value = new Date(), 1000)
	return () => clearInterval(id)
})

const App = () => {
	const date = useComputed(() => isoDate(now.value))
	const datetime = useComputed(() => isoDatetime(now.value))
	const week = useComputed(() => isoWeek(now.value))
	const weekday = useComputed(() => isoWeekday(now.value))
	const ordinal = useComputed(() => isoOrdinal(now.value))

	return html`
        <main>
            <h1>${date}</h1>
            <h2>${datetime}</h2>
            <h3>${week}</h3>
            <h4>${weekday}</h4>
            <h5>${ordinal}</h5>
        </main>
    `
}

render(
	html`<${App}/>`,
	document.getElementById("root") as HTMLElement,
)

effect(() => {
	document.querySelector("head title")!.innerHTML = isoTime(now.value)
	document.querySelector("head link[rel=icon]")?.setAttribute(
		"href",
		`/iso8601/clock-hour-${(now.value.getHours() - 1) % 12 + 1}.svg`,
	)
})
