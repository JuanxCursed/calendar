export default async(context, locale) => {
    return {
        "app": {
            "name": process.env.APP_NAME,
            "baseUrl": process.env.APP_BASE_URL,
        },
        "components": {
            "calendar": {
                "month": 'Month',
                'week': 'Week',
                'day': 'Day',
                'today': 'Today',
                'weekdays': ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                'weekdaysShort': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                'next': 'Next >',
                'prev': '< Previous'
            }
        },
        "form": {
            "name": "Reminder",
            "city": "City",
            "date": "Day",
            "color": "Color",
            "save": "Save",
            "cancel": "Cancel",
        },
        "validation": {
            "required": "This field is required",
        },
        "reminder": {
            "new": "New reminder",
        },
        "weather": {
            "temperature": "Temperature",
            "sunny": "Sunny",
            "low_cloudy": "Few cloudy",
            "disperses_cloudy": "Scattered cloudy",
            "cloudyDart": "Dark clouds",
            "rainy": "Rainy",
            "rainy": "Rainy",
            "storm": "Storm",
            "flurries": "Flurries",
            "fog": "Fog",
            "sunrise": "Sunrise",
            "sunset": "Sunset",
        }
    }
}