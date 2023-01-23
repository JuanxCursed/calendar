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
					<textarea v-bind="$attrs" ref="input" v-on="listeners" :value="value">{{
						value
					}}</textarea>
					<div
						class="char-counter"
						:class="isOverMaxCharCount ? 'max-char-reached':''"
					>
						<span>{{ charCount }}</span>
						<span>/ {{ maxCharCount }}</span>
					</div>
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
/**
 * @NOTE - Validations are handled by Vee-Validate
 * But can be handled by any other validation library or by the component itself
 * @NOTE - The component is not using the v-model directive because it is not working with the ValidationProvider
 */
	import Events from '@/constants/Events'
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
			},
			value: {
				type: [String, Number],
				description: 'Input value',
			},
			maxCharCount: {
				type: [String, Number],
				description: 'Max character count',
				default: 30,
			},
		},
		data() {
			return {
				focused: false,
				touched: false,
			}
		},
		computed: {
			required(){
				return this.rules.indexOf('required') !== -1
			},
			charCount(){
				return this.value.length
			},
			isOverMaxCharCount() {
				return this.value.length > this.maxCharCount
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
<style scoped>
.char-counter {
	font-size: 10px;
	float: right;
}
.max-char-reached {
	color: red;
	font-weight: 700;
}
</style>