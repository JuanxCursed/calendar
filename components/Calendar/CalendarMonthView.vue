<template>
	<div class="calendar-month">
		<div class="calendar-month-header">
			<calendar-date-indicator
				:selected-date="selectedDate"
				class="calendar-month-header-selected-month"
			/>
			<calendar-date-selector
				:current-date="today"
				:selected-date="selectedDate"
				@dateSelected="selectDate"
			/>
		</div>

		<calendar-weekdays />

		<ol class="days-grid">
			<calendar-month-day-item
				v-for="(day, i) in days"
				:key="`day-${i}`"
				:day="day.date"
				:is-current-month="day.isCurrentMonth"
				:is-today="day.date === today"
			/>
		</ol>
	</div>
</template>

<script>
	import moment from 'moment'
	import CalendarMonthDayItem from './CalendarMonthDayItem'
	import CalendarDateIndicator from './CalendarDateIndicator'
	import CalendarDateSelector from './CalendarDateSelector'
	import CalendarWeekdays from './CalendarWeekdays'

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
				selectedDate: moment().startOf('day'),
			}
		},

		computed: {
			today() {
				return moment().format('L')
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
				const firstDayToRender = moment(this.selectedDate).startOf('month').startOf('week')
				console.log(firstDayToRender);
				const lastDayToRender = moment(this.selectedDate).endOf('month').endOf('week')

				while (firstDayToRender <= lastDayToRender) {
					days.push({
						date: firstDayToRender.clone(),
						isCurrentMonth: firstDayToRender.month() === this.month,
					})
					firstDayToRender.add(1, 'day')
				}

				return days
			},
		},

		methods: {
			selectDate(SelectedDate) {
				this.selectedDate = SelectedDate
			},
		},
	}
</script>

<style scoped>
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
	grid-template-columns: repeat(7, 1fr);
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
