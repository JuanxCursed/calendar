export default async (context, locale) => {
    return {
        "app": {
            "name": process.env.APP_NAME,
            "baseUrl": process.env.APP_BASE_URL,
        },
        "components": {
            "calendar": {
                "month": 'Mês',
                'week': 'Semana',
                'day': 'Dia',
                'today': 'Hoje',
                'weekdays': ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
                'weekdaysShort': ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
                'next': 'Próximo >',
                'prev': '< Anterior'
            }
        },
        "form": {
            "name": "Lembrete",
            "city": "Cidade",
            "date": "Dia",
            "time": "Hora",
            "color": "Cor",
            "save": "Salvar",
            "cancel": "Cancelar",
        },
        "validation": {
            "required": "Este campo é obrigatório",
        },
        "reminder": {
            "new": "Novo lembrete",
        }
    }
}