<template>
	<div class="modal">
		<div class="backdrop" @click="close"></div>
		<form @submit.prevent="submit" class="modal-form">
			<div class="modal-header">
				<h3>{{ $t('reminder.new') }}</h3>
				<button class="delete-reminder icon error large pull-right" @click="deleteReminder">
					<i class="fa fa-trash"></i>
				</button>
			</div>
			<base-input
				v-model="model.city"
				:label="$t('form.city')"
				:rules="'required'"
			/>

			<base-input
				v-model="model.date"
				type="datetime-local"
				:label="$t('form.date')"
				:rules="'required'"
				:value="date"
			/>

			<base-input
				v-model="model.color"
				type="color"
				:value="model.color"
				:label="$t('form.color')"
			/>
			<base-textarea
				:rules="'required'"
				v-model="model.name"
				:label="$t('form.name')"
			/>
			<div class="modal-footer">
				<button @click="close" class="secundary">
					{{ $t('form.cancel') }}
				</button>				
				<button type="submit">{{ $t('form.save') }}</button>
			</div>
		</form>
	</div>
</template>

<script>
	import moment from 'moment'
	import Events from '@/constants/Events'
	import Actions from '@/constants/Actions'
	import BaseInput from '@/components/Form/BaseInput.vue'
	import ReminderModel from '@/models/ReminderModel'
	import BaseTextarea from '@/components/Form/BaseTextarea.vue'

	export default {
		components: { BaseInput, BaseTextarea },
		name: 'ReminderForm',
		data() {
			return {
				model: {
					city: 'Guarulhos',
					date: '',
					color: '#3c8dbc',
					name: 'Teste',
				},
			}
		},
		props: {
			date: {
				type: String,
				default: moment().format('YYYY-MM-DDTHH:mm'),
			},
			reminder: {
				type: Object,
				default: undefined,
			},
		},
		mounted() {
			this.model.date = this.date
			if (this.reminder) {
				this.model = this.reminder.copyWith()
			}
		},
		methods: {
			/**
			 * @NOTE - This method is responsible for creating or updating a reminder
			 * Usage of the model make it possible to use the same form for both actions
			 * without extra coding, also keep the implementation of the form simple, clear and
			 * easy to understand.
			 * 
			 * If for some reason the form needs to be different for each action, it is possible
			 * If the backend needs to receive different data for each action, it is possible
			 * to create a new model for each action, but it is not necessary.
			 * 
			 */
			submit() {
				const reminder = new ReminderModel(this.model)
				this.reminder ?
					this.$store.dispatch(Actions.REMINDER_UPDATE, {
						before: this.reminder,
						after: this.model,
					}):
					this.$store.dispatch(Actions.REMINDER_CREATE, reminder)
				this.$emit(Events.CREATED_REMINDER, reminder)
				this.close()
			},
			deleteReminder(){
				const reminder = new ReminderModel(this.model)
				this.$store.dispatch(Actions.REMINDER_DELETE, reminder)
				this.$emit(Events.CREATED_REMINDER, reminder)
				this.close()
			},
			close() {
				this.$emit(Events.CLOSE)
			},
		},
	}
</script>
<style scoped>
.modal-header{
	position: relative;
}
.delete-reminder{
	position: absolute;
	top: calc(50% - 20px);
	right: 10px;
}
</style>