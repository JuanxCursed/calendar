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

    copyWith() {
        return new ReminderModel({
            name: this.name,
            date: this.date,
            city: this.city,
            color: this.color,
        });
    }

    equals = (other) => {
        return this.name === other.name &&
            this.date === other.date &&
            this.city === other.city &&
            this.color === other.color;
    };
}

export default ReminderModel