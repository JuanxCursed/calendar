# Calendar

## Build Setup

```bash
# install dependencies
$ yarn install
$ cp .env.example .env

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Features List

- [ ] Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.
- [x] Display reminders on the calendar view in the correct time order.
- [x] Allow the user to select color when creating a reminder and display it appropriately.
- [x] Ability to edit reminders – including changing text, city, day, time and color.
- [ ] Add a weather service call from a free API such as Open Weather Map, and get the weather forecast (ex. Rain) for the date of the calendar reminder based on the city.
- [ ] Unit test the functionality: Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city
- [ ] Expand the calendar to support more than the current month.
- [ ] Properly handle overflow when multiple reminders appear on the same date.
- [ ] Functionality to delete one or ALL the reminders for a specific day
- [ ] Localization (en,es,pt)
- [ ] PWA

## Archtheture edtails

For this project I used the concept of repository pattern with a very simple dependency injection system.