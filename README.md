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

- [x] Expand the calendar to support more than the current month.
- [ ] Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.
- [ ] Ability to edit reminders – including changing text, city, day, time and color.
- [ ] Display reminders on the calendar view in the correct time order.
- [ ] Allow the user to select color when creating a reminder and display it appropriately.
- [ ] Add a weather service call from a free API such as Open Weather Map, and get the weather forecast (ex. Rain) for the date of the calendar reminder based on the city.
- [ ] Unit test the functionality: Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city
- [ ] Properly handle overflow when multiple reminders appear on the same date.
- [ ] Functionality to delete one or ALL the reminders for a specific day
- [x] Localization (en,es,pt)
- [x] PWA

## Archtheture edtails

For this project I used the concept of repository pattern with a very simple dependency injection system.