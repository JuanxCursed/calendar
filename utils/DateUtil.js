class DateUtil {
    constructor(date = new Date(), useParser = false, locale = 'en-US') {
        switch (true) {
            case date instanceof DateUtil:
                this.date = new Date(date.date)
                break
            case date instanceof Date:
                this.date = date
                break
            case useParser:
                this.date = Date.parse(date)
                break
            case typeof date === 'string':
                this.date = new Date(date)
                break
            default:
                this.date = date
        }
        this.locale = locale
        this.useParser = useParser
    }

    getDateString() {
        return this.date.toLocaleDateString(this.locale, { year: 'numeric', month: "2-digit", day: "2-digit" });
    }

    setFirstDayOfMonth() {
        this.date = Date(this.date.getFullYear(), this.date.getMonth(), 1);
        return this;
    }

    getTimeString() {
        return this.date.toTimeString();
    }

    getFullString() {
        return this.date.toString();
    }

    getDaysInMonth() {
        return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    }

    getFullYear() {
        return this.date.getFullYear();
    }

    getDayOfMonth() {
        return this.date.getDate();
    }

    getMonth() {
        return this.date.toLocaleDateString(this.locale, { month: "2-digit" });
    }

    getYear() {
        return this.date.getYear();
    }

    getDayName() {
        return this.date.toLocaleDateString(this.locale, { weekday: 'long' });
    }

    getMonthName() {
        return this.date.toLocaleDateString(this.locale, { month: 'long' });
    }

    getMonthNameAndYear() {
        return this.date.toLocaleDateString(this.locale, { month: 'long', year: 'numeric' });
    }

    getDayOfWeek() {
        return this.date.getDay();
    }

    subtractDays(days) {
        this.date.setDate(this.date.getDate() - days);
        return this;
    }

    addDays(days) {
        this.date.setDate(this.date.getDate() + days);
        return this;
    }

    addMonth(month) {
        this.date.setMonth(this.date.getMonth() + month);
        return this;
    }

    subtractMonth(month) {
        this.date.setMonth(this.date.getMonth() - month);
        return this;
    }
}

export default DateUtil