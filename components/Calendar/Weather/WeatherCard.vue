<template>
  <div class="weather-card weather-card-info">
    <div class="weather-description temperature-container">
      <p class="temperature-title">{{$t('weather.temperature')}}</p>
      <h1 class="temperature-temperature">{{ weather.main.temp }}°</h1>
      <p class="temperature-min">{{$t('weather.min')}}: {{ weather.main.temp_min }}°</p>
      <p class="temperature-max">{{$t('weather.max')}}: {{ weather.main.temp_max }}°</p>
    </div>
    <div class="weather-description">
      <p>{{ date }}</p>
      <h5>
        <i class="fa fa-map"></i>
        {{ weather.name || 'En algun lugar de la tierra' }}
      </h5>
    </div>     
    <div class="weather-description-icon">
      <weather-icon :icon="getIcon(weather.weather).icon"></weather-icon>
      <h5>{{ getIcon(weather.weather).title }}</h5>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import WeatherIcon from './WeatherIcon.vue';
import WeatherTime from './WeatherTime.vue';

export default {
  name:'WeatherCard',
	components: { WeatherIcon, WeatherTime },
  props: {
    weather: {
      type: Object,
      default: {},
      required: true,
    },
  },
  computed:{
    date(){
      return this.weather.dt
            ? moment(this.weather.dt).format('L')
            : moment().format('L')
    }
  },
  methods: {
    getIcon(weather) {
      const icon = weather[0].icon.replace(/n/g, 'd')
      const iconsList = {
        '01d': { icon: 'sunny', title: this.$t('weather.sunny') },
        '02d': { icon: 'cloudy', title: this.$t('weather.low_cloudy') },
        '03d': { icon: 'cloudy', title: this.$t('weather.disperses_cloudy') },
        '04d': { icon: 'cloudy-dark', title: this.$t('weather.cloudyDart') },
        '09d': { icon: 'rainy', title: this.$t('weather.rainy') },
        '10d': { icon: 'rainy', title: this.$t('weather.rainy') },
        '11d': { icon: 'storm', title: this.$t('weather.storm') },
        '13d': { icon: 'flurries', title: this.$t('weather.flurries') },
        '50d': { icon: 'cloudy', title: this.$t('weather.fog') },
      }
      return iconsList[icon]
    },
  },
}
</script>

<style lang="css" scoped>
.weather-title,
.weather-description {
  color:var(--background-color);
}
.weather-card {
  display: flex;
  border-radius: var(--grid-padding);
  text-transform: capitalize;
  padding: var(--grid-padding);
  min-width: 500px;
  justify-content: space-between;
}

.weather-card-info {
  background-image: linear-gradient(90deg, #1b92ff, #5bb6ff);
}
.weather-description {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
}
.weather-description-icon {
  color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.temperature-container::after {
  content: '';
  display: block;
  position: absolute;
  width: 2px;
  height: 100%;
  border-radius: 1px;
  top: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
}
p,
h1,
h5 {
  margin-top: 0;
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
	.weather-card {
		display: flex;
		flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: var(--grid-padding);
    min-width: inherit;
	}	
}
</style>
