<template>
	<li
		class="calendar-day"
		:class="{
			'not-current': !isCurrentMonth,
			today: isToday,
		}"
	>
		<span class="date-label">{{ day.date() }}</span>
		<reminder
			v-for="(reminder, i) in reminders"
			:key="`${i}-${reminder.time}=${reminder.date}`"
			:reminder="reminder"
			@selectReminder="selectReminder"
		></reminder>
		<button class="secundary icon new-reminder" @click="selectDate(day)">
			<i class="fa fa-plus"></i>
		</button>
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
			selectReminder(reminder) {
				this.$emit(Events.SELECTED_REMINDER, reminder)
			},
			selectDate(date) {
				this.$emit(Events.SELECTED_DATE, date)
			},
		},
	}
</script>

<style scoped>
/**
@NOTE Without this relative, the day label will be positioned relative to the body which will break the layout
 */
.calendar-day {
	position: relative;
	min-height: 100px;
	font-size: 16px;
	background-color: var(--background-color);
	color: var(--grey-800);
	padding: 27px 5px 5px;
}

/**
@NOTE This is what defines the position of the day label
 */
.calendar-day > .date-label {
	position: absolute;
	top: 2px;
	right: 2px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	font-size: 11px;
	width: var(--day-label-size);
	height: var(--day-label-size);
	background-color: var(--background-color);
	border-radius: 100%;
}

.not-current {
	background-color: var(--grey-100);
	color: var(--grey-300);
}

.today > .date-label {
	color: var(--background-color);
	font-weight: 600;
	background-color: var(--primary-color);
}
.new-reminder {
	position: absolute;
	left: 2px;
	top: 2px;
}
</style>
