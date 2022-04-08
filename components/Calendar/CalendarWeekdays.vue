<template>
  <ol class="day-of-week">
    <li v-for="weekday in weekdays" :key="weekday">{{ weekday }}</li>
  </ol>
</template>

<script>
export default {
  name: "CalendarWeekdays",
  computed: {
    weekdays() {
      /**
       * that is totally overkill since we're using moment.js, 
       * but it's an example of how to use custom localizations strings
       */
      return this.$t('components.calendar.weekdaysShort');
    }
  }
};
</script>

<style scoped>
.day-of-week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day-of-week > * {
  text-align: left;
  padding-right: 5px;
}
</style>
