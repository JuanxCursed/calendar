import moment from 'moment';
class ReminderModel {
    name;
    date;
    city;
    color;

    constructor({ name, date, city, color } = {}) {
        this.name = name;
        this.date = date;
        this.city = city;
        this.color = color;
    }

    get time() {
        return moment(this.date).format('HH:mm');
    }

    static fromJson(json = {}) {
        return new ReminderModel(json);
    }
}

export default ReminderModel