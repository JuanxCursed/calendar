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



</style>
