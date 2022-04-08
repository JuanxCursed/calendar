<template>
	<div>
		<calendar-month-view
			@showReminderForm="showReminderForm"
			:reminders="reminders"
		></calendar-month-view>
		<div v-if="mustShowReminderForm">
			<reminder-form :date="selectedDate" @close="hideReminderForm" />
		</div>
	</div>
</template>

<script>
	/**
	 * Leave some space to implement the calendar with different views
	 * - [x] Month View
	 * - [ ] Week View
	 * - [ ] Day View
	 */
	import moment from 'moment'
	import CalendarMonthView from './CalendarMonthView'
	import ReminderForm from '@/components/Calendar/Reminder/ReminderForm.vue'
import ReminderModel from '@/models/ReminderModel'

	export default {
		name: 'CalendarBase',
		components: {
			CalendarMonthView,
			ReminderForm,
		},
		data() {
			return {
				mustShowReminderForm: false,
				selectedDate: moment(),
				reminders:[]
			}
		},
		mounted(){
			const {reminders} = this.$store.state.reminders
			this.reminders = reminders.map(reminder => ReminderModel.fromJson(reminder))
		},
		methods: {
			showReminderForm(date) {
				this.selectedDate = date.format('YYYY-MM-DD')
				this.mustShowReminderForm = true
			},
			hideReminderForm(date) {
				this.selectedDate = moment()
				this.mustShowReminderForm = false
				this.$forceUpdate();
			},
		},
	}
</script>
<style >
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
	transform: translateX(10px);
	opacity: 0;
}
</style>