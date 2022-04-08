class ReminderModel {
    name;
    date;
    time;
    city;
    color;

    constructor({ name, date, time, city, color } = {}) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.city = city;
        this.color = color;
    }

    static fromJson(json = {}) {
        return new ReminderModel(json);
    }
}

export default ReminderModel