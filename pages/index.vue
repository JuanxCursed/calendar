<template>
	<calendar></calendar>
</template>

<script>
	import Calendar from '@/components/Calendar/Calendar.vue'
	import CalendarMonth from '../components/Calendar/CalendarMonthView.vue'

	export default {
		name: 'HomePage',
		components: { Calendar, CalendarMonth },
	}
</script>

<style>
:root {
	--grey-100: #e4e9f0;
	--grey-200: #cfd7e3;
	--grey-300: #b5c0cd;
	--grey-800: #3e4e63;
	--text-color: #2c3e50;
	--background-color: #fff;
	--primary-background-color: rgb(108, 118, 159);
	--grid-gap: 1px;
	--grid-padding: 10px;
	--day-label-size: 20px;
}

body {
	font-family: 'Poppins', 'Avenir', Helvetica, Arial, sans-serif;
	font-weight: 300;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: var(--text-color);
	margin-top: var(--grid-padding);
}

ol,
li {
	padding: 0;
	margin: 0;
	list-style: none;
}

.calendar-month-header {
	display: flex;
	justify-content: space-between;
	background-color: var(--background-color);
	padding: var(--grid-padding);
}
</style>
