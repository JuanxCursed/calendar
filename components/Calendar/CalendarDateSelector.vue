<template>
	<div class="calendar-date-selector">
		<span @click="selectPrevious">{{ $t('components.calendar.prev') }}</span>
		<span @click="selectCurrent">{{ $t('components.calendar.today') }}</span>
		<span @click="selectNext">{{ $t('components.calendar.next') }}</span>
	</div>
</template>

<script>
	import moment from 'moment'

	const DATE_SELECTED = 'dateSelected'

	export default {
		name: 'CalendarModeSelector',

		props: {
			currentDate: {
				type: String,
				required: true,
			},

			selectedDate: {
				type: Object,
				required: true,
			},
		},

		methods: {
			selectPrevious() {
				let newSelectedDate = new moment(this.selectedDate).subtract(1, 'months')
				this.$emit(DATE_SELECTED, newSelectedDate)
			},

			selectCurrent() {
				let newSelectedDate = new moment()
				this.$emit(DATE_SELECTED, newSelectedDate)
			},

			selectNext() {
				let newSelectedDate = new moment(this.selectedDate).add(1, 'months')
				this.$emit(DATE_SELECTED, newSelectedDate)
			},
		},
	}
</script>

<style scoped>
.calendar-date-selector {
	display: flex;
	justify-content: space-between;
	color: var(--grey-800);
	padding: var(--grid-padding);
}

.calendar-date-selector > * {
	cursor: pointer;
	user-select: none;
	padding: var(--grid-padding);
}
</style>
