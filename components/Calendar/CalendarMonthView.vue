<template>
	<div class="calendar-month">
		<div class="calendar-month-header">
			<calendar-date-indicator
				:selected-date="selectedDate"
				class="calendar-month-header-selected-month"
			/>
			<calendar-date-selector
				:current-date="currentMonth"
				:selected-date="selectedDate"
				@changedDate="selectDate"
			/>
		</div>

		<calendar-weekdays />

		<ol class="days-grid">
			<calendar-month-day-item
				v-for="(day, i) in days"
				:key="`day-${i}`"
				:day="day.date"
				:is-current-month="day.isCurrentMonth"
				:is-today="day.date.format('L') === today.format('L')"
				:reminders="day.reminders"
				@selectedDate="showReminderForm"
				@selectReminder="selectReminder"
			/>
		</ol>
	</div>
</template>

<script>
	import moment from 'moment'
	import Dates from '@/constants/Dates'
	import CalendarMonthDayItem from './CalendarMonthDayItem'
	import CalendarDateIndicator from './CalendarDateIndicator'
	import CalendarDateSelector from './CalendarDateSelector'
	import CalendarWeekdays from './CalendarWeekdays'
	import Events from '@/constants/Events'

	export default {
		name: 'CalendarMonthView',

		components: {
			CalendarMonthDayItem,
			CalendarDateIndicator,
			CalendarDateSelector,
			CalendarWeekdays,
		},

		data() {
			return {
				selectedDate: moment().startOf(Dates.DAY),
			}
		},
		props: {
			reminders: {
				type: Array,
				default: [],
			},
		},
		computed: {
			currentMonth() {
				return moment().format('L')
			},
			today() {
				return moment().startOf(Dates.DAY)
			},
			month() {
				return this.selectedDate.month()
			},

			year() {
				return this.selectedDate.year()
			},

			numberOfDaysInMonth() {
				return this.selectedDate.daysInMonth()
			},
			days() {
				const days = []
				const firstDayToRender = moment(this.selectedDate)
					.startOf(Dates.MONTH)
					.startOf(Dates.WEEK)
				const lastDayToRender = moment(this.selectedDate)
					.endOf(Dates.MONTH)
					.endOf(Dates.WEEK)

				while (firstDayToRender <= lastDayToRender) {
					days.push({
						date: firstDayToRender.clone(),
						isCurrentMonth: firstDayToRender.month() === this.month,
						reminders: this.getRemindersForDay(firstDayToRender),
					})
					firstDayToRender.add(1, Dates.DAY)
				}

				return days
			},
		},

		methods: {
			selectDate(SelectedDate) {
				this.selectedDate = SelectedDate
			},
			showReminderForm(date) {
				this.$emit(Events.SHOW_REMINDER_FORM, date)
			},
			hideReminderForm() {
				this.$emit(Events.HIDE_REMINDER_FORM)
			},
			getRemindersForDay(day) {
				return this.reminders
					.sort((a, b) => moment(a.date) - moment(b.date))
					.filter(
						(reminder) => moment(reminder.date).format('L') === day.format('L')
					)
			},
			selectReminder(reminder) {
				this.$emit(Events.SELECTED_REMINDER, reminder)
			},
		},
	}
</script>

<style scoped>
.calendar-month-header {
	display: flex;
	justify-content: space-between;
	background-color: var(--background-color);
	padding: var(--grid-padding);
}

.calendar-month {
	position: relative;
	background-color: var(--grey-200);
	border: solid 1px var(--grey-300);
}

.day-of-week {
	color: var(--grey-800);
	font-size: 18px;
	background-color: #fff;
	padding-bottom: 5px;
	padding-top: 10px;
}

.day-of-week,
.days-grid {
	display: grid;
	grid-template-columns: repeat(7, minmax(0, 1fr));
	padding: var(--grid-padding);
}

.day-of-week > * {
	text-align: right;
	padding-right: 5px;
}

.days-grid {
	height: 100%;
	position: relative;
	grid-column-gap: var(--grid-gap);
	grid-row-gap: var(--grid-gap);
	border-top: solid 1px var(--grey-200);
}
</style>
