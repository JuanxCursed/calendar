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
				key: 'ffbe192f5adeff62c7ca18c7f314e251', // That should be in the config with .env, but let's do it just to be quicker
			}
		},
    async created() {
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
			async getWeather() {
				try {
					const key = process.env.APIKEY
					const { data } = await this.$axios.get(
						`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.key}&units=metric`
					) // That should be in the providers/services, but let's do it this way just to be quicker
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