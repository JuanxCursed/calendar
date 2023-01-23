<template>
	<div>
		<weather-card v-if="!hasError && !isLoading" :weather="weather" />
		<div v-if="isLoading">
			<i class="fa fa-refresh"></i>
		</div>
	</div>
</template>

<script>
	import WeatherCard from './WeatherCard.vue'
	export default {
		components: { WeatherCard },
		name: 'WeatherBase',
		data() {
			return {
				isLoading: true,
				weather: {},
				hasError: false,
				lat: 0,
				lon: 0,
				key: 'ffbe192f5adeff62c7ca18c7f314e251', // That should be in the config with .env, but let's do it just to be quicker to test
			}
		},
    async created() {
			/**
			 * @NOTE
			 * This is requesting the user's location, and then getting the weather
			 * That should be a helper/composable, but let's do it this way just to be quicker to test
			 * The candidate should consider failure cases, like the user not allowing the browser to get the location
			 */
				if (process.browser) {
					if ('geolocation' in navigator) {
						const { state } = await navigator.permissions.query({
							name: 'geolocation',
						})
						if (state === 'denied') {
							this.hasError = true
							console.error('Permissions denied')
						} else {
							navigator.geolocation.getCurrentPosition((position) => {
								this.lat = position.coords.latitude
								this.lon = position.coords.longitude
								this.getWeather()
							})
						}
					} else {
						this.hasError = true
						console.error('Geolocation is not available')
					}
				}
			},
		methods: {
			/**
			 * @NOTE
			 * That should be in the repositories/services, but let's do it this way just to be quicker
			 * to test
			 * Definatevely, this should be in the repositories/service
			 */			
			async getWeather() {
				try {
					const key = process.env.APIKEY || this.key
					const { data } = await this.$axios.get(
						`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${key}&units=metric`
					) 
					this.weather = data
          
				} catch (error) {
					this.hasError = true
					console.error(error)
				}
        this.isLoading = false
			},
		},
	}
</script>