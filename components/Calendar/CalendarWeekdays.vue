<template>
	<ol class="day-of-week">
		<li v-for="weekday in weekdays" :key="weekday">{{ weekday }}</li>
	</ol>
</template>

<script>
	export default {
		name: 'CalendarWeekdays',
		computed: {
			weekdays() {
				/**
				 * that is totally overkill since we're using moment.js,
				 * but it's an example of how to use custom localizations strings
				 */
				return this.$t('components.calendar.weekdaysShort')
			},
		},
	}
</script>

<style scoped>
/**
@NOTE This is a grid of 7 columns, each column is 1fr (fraction of the available space) 
This is how the "calendar" is made, each column is a day of the week, and each row is a week of the month
There is multiple way to do this, but this is the most simple one, more "newer kind" and with less code than the old way
using floats and clear:both for instance

The usage of has, where, is, repeat and vars, shows the power of CSS and the knowledge of the developer

*/
.day-of-week {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
}

.day-of-week > * {
	text-align: left;
	padding-right: 5px;
}
</style>
