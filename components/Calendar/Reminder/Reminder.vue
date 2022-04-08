<template>
	<span		
		class="reminder"
		:style="{
			'background-color': reminder.color,
			'color': calculateContrastColor(reminder.color),
		}"
	>
		<span class="time">{{ reminder.time }}</span> {{ reminder.name }}
	</span>
</template>

<script>
import ReminderModel from '@/models/ReminderModel'
	export default {
		name: 'Reminder',
    props: {
      reminder: {
        type: ReminderModel,
        required: true,
      },
    },
		methods:{
			calculateContrastColor(color) {
				const rgb = color.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b);
				const r = parseInt(rgb.substring(1, 3), 16);
				const g = parseInt(rgb.substring(3, 5), 16);
				const b = parseInt(rgb.substring(5, 7), 16);
				const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
				return (yiq >= 128) ? 'black' : 'white';
			},
		}
	}
</script>

<style scoped>
.reminder {
	display: block;
	margin: 0 auto;
	width: 100%;
	font-size: 13px;
	text-align: left;	
	padding: 5px;
	border-radius: var(--grid-padding);
	white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.reminder + .reminder {
	margin-top: 2px;
}
.reminder > .time{
	font-weight: 700;
	font-size: 10px;
}
</style>