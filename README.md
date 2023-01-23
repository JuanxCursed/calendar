# Calendar (Recruitment test)
This is a pre made sample to test the knowlodge of the developer on these aspects:
- Vue
- Routing
- State management
- Software Architecture
- CSS Flex and CSS Grid
- Sass (Extra)
- API Communitation
- Unit and E2E testing
- Documentation and communication
- SCM (Git)

## What is expected?

- [ ] Fullfil the missing items in features list
- [ ] Fetch data from external services
- [ ] Complete the missing features on the stores
- [ ] Fix the CSS issue that is breaking the layout visualy
- [ ] Write Unit tests for the store, components and utils
- [ ] Complete the missing form element
- [ ] Write the form validation
- [ ] Write the missing docs on readme.md
- [ ] DO NOT hardcode the environment variable

### What and how avaliate

This will depends on the developers level and how the problems is solved.
- If the candidate create a service file to communicate with the external services, if instead he code this logic inside the component itself this will be a drawback, cause that way we are accoupling the service into the component, so, the business logic will be attached to it.
- If the candidate create a model, this will keep the component clean and more readable. Also all the values are parsed, defaulted or validated by the model, keeping the business logic isolated.

For more details look along the code places where we have the `@NOTE` notation.


<!-- @NOTE the content below is one of the thing that can be done by the candidate as part of documentation -->
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
- [x] Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.
- [x] Ability to edit reminders – including changing text, city, day, time and color.
- [x] Display reminders on the calendar view in the correct time order.
- [x] Allow the user to select color when creating a reminder and display it appropriately.
- [x] Properly handle overflow when multiple reminders appear on the same date.
- [x] Functionality to delete one or ALL the reminders for a specific day
- [x] Localization (en,es,pt)
- [x] PWA
- [x] Add a weather service call from a free API such as Open Weather Map, and get the weather forecast (ex. Rain) for the date of the calendar reminder based on the city.
- [x] Unit tests

## Archtheture edtails

For this project I used the concept of repository pattern with a very simple dependency injection system.