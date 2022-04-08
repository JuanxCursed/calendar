export default async(context, locale) => {
    return {
        "app": {
            "name": process.env.APP_NAME,
            "baseUrl": process.env.APP_BASE_URL,
        },
        "components": {
            "calendar": {
                "month": 'Mes',
                'week': 'Semana',
                'day': 'Dia',
                'today': 'Hoy Día',
                'weekdays': ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
                'weekdaysShort': ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
                'next': 'Proximo >',
                'prev': '< Anterior',
            }
        },
        "form": {
            "name": "Recordatorio",
            "city": "Ciudad",
            "date": "Día",
            "color": "Color",
            "save": "Ahorrar",
            "cancel": "Cancelar",
        },
        "validation": {
            "required": "Este campo es obligatorio",
        },
        "reminder": {
            "new": "Nuevo recordatorio",
        },
        "weather": {
            "temperature": "Temperatura",
            "sunny": "Soleado",
            "low_cloudy": "Pocas nubes",
            "disperses_cloudy": "Nubes Dispersas",
            "cloudyDart": "Nubes oscuras",
            "rainy": "Lluvia",
            "rainy": "Lluvia",
            "storm": "Tormenta",
            "flurries": "Nieve",
            "fog": "Neblina",
            "sunrise": "Amanecer",
            "sunset": "Puesta de Sol",
            "min": "Min",
            "max": "Max",
        }
    }
}