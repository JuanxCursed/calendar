<template>
	<div class="calendar-date-indicator">{{ currentDate }}</div>
</template>

<script>
	import moment from 'moment'

	const MONTH_YEAR_FORMAT = 'MMMM YYYY'

	export default {
		props: {
			selectedDate: {
				type: Object,
				required: true,
			},
		},
		computed: {
			currentDate() {
				return new moment(this.selectedDate).format(MONTH_YEAR_FORMAT)
			},
		},
	}
</script>

<style scoped>
.calendar-date-indicator {
	font-size: 24px;
	font-weight: 600;
	color: var(--grey-00);
	text-transform: capitalize;
}
</style>

