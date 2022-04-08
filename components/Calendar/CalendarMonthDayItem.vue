<template>
	<li
		@click="selectDate(date)"
		class="calendar-day"
		:class="{
			'not-current': !isCurrentMonth,
			today: isToday,
		}"
	>
		<span>{{ day.date() }}</span>
	</li>
</template>

<script>
	import Events from '@/constants/Events'

	export default {
		name: 'CalendarMonthDayItem',

		props: {
			day: {
				type: Object,
				required: true,
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

.calendar-day > span {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
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

.today > span {
	color: var(--background-color);
	font-weight: 600;
	border-radius: 9999px;
	background-color: var(--primary-background-color);
}
</style>
