<template>
	<li
		@click="selectDate(day)"
		class="calendar-day"
		:class="{
			'not-current': !isCurrentMonth,
			today: isToday,
		}"
	>
		<span class="date-label">{{ day.date() }}</span>
		<reminder 
			v-for="(reminder,i) in reminders"
			:key="`${i}-${reminder.time}=${reminder.date}`"
			:reminder="reminder"
		></reminder>
	</li>
</template>

<script>
	import Events from '@/constants/Events'
	import Reminder from './Reminder/Reminder.vue'

	export default {
		components: { Reminder },
		name: 'CalendarMonthDayItem',

		props: {
			day: {
				type: Object,
				required: true,
			},
			reminders: {
				type: Array,
				default: [],
			},
			isCurrentMonth: {
				type: Boolean,
				default: false,
			},
			isToday: {
				type: Boolean,
				default: false,
			},
		},
		methods: {
			selectDate(date) {
				this.$emit(Events.SELECTED_DATE, date)
			},
		},
	}
</script>

<style scoped>
.calendar-day {
	position: relative;
	min-height: 100px;
	font-size: 16px;
	background-color: var(--background-color);
	color: var(--grey-800);
	padding: 5px;
}

.calendar-day > .date-label {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	font-size: 11px;
	right: 2px;
	width: var(--day-label-size);
	height: var(--day-label-size);
}

.not-current {
	background-color: var(--grey-100);
	color: var(--grey-300);
}

.today {
	padding-top: 4px;
}

.today > .date-label {
	color: var(--background-color);
	font-weight: 600;
	border-radius: 9999px;
	background-color: var(--primary-color);
}
</style>
