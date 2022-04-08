<template>
	<calendar-month-view></calendar-month-view>
</template>

<script>
	/**
	 * Leave some space to implement the calendar with different views
	 * - [x] Month View
	 * - [ ] Week View
	 * - [ ] Day View
	 */
	import CalendarMonthView from './CalendarMonthView'
	export default {
		name: 'CalendarBase',
		components: {
			CalendarMonthView,
		},
	}
</script>
