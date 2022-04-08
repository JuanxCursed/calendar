<template>
	<ValidationProvider v-slot="{ errors }" :rules="rules">
		<div
			class="base-input"
			:class="{
				'has-danger': errors.length > 0,
				'has-success': !errors.length > 0 && touched,
				'has-label': label,
			}"
		>
			<slot name="label">
				<label v-if="label"> {{ label }} {{ required ? '*' : '' }} </label>
			</slot>
			<div>
				<slot>
					<input v-bind="$attrs" ref="input" :value="value" v-on="listeners" />
				</slot>
			</div>
			<slot v-if="errors || $slots.errors" name="error">
				<label v-for="(error, i) in errors" :key="`error_${i}`" class="error">{{
					error
				}}</label>
			</slot>
			<slot name="helperText"></slot>
		</div>
	</ValidationProvider>
</template>
<script>
	import Events from '../../constants/Events'
	export default {
		name: 'BaseInput',
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'input',
		},
		props: {
			label: {
				type: String,
				description: 'Input label',
			},
			rules: {
				type: String,
				description: 'Vee-Validate Rules',
				default:''
			},
			value: {
				type: [String, Number],
				description: 'Input value',
			},
		},
		data() {
			return {
				focused: false,
				touched: false,
			}
		},
		computed: {
			required() {
				return this.rules.indexOf('required') !== -1
			},
			listeners() {
				return {
					...this.$listeners,
					input: this.onInput,
					blur: this.onBlur,
					focus: this.onFocus,
				}
			},
		},
		methods: {
			onInput(evt) {
				if (!this.touched) {
					this.touched = true
				}
				this.$emit(Events.INPUT, evt.target.value)
			},
			onFocus(evt) {
				if (this.$refs.input.getAttribute("type") === "datetime-local") {
					this.$refs.input.showPicker();
			  }
				this.focused = true
				this.$emit(Events.FOCUS, evt)
			},
			onBlur(evt) {
				this.focused = false
				this.$emit(Events.BLUR, evt)
			},
		},
	}
</script>
<style>
</style>