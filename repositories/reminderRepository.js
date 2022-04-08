export default ($fake) => {
    return {
        /**
         * Here I would do a call to a backend service to get all reminders
         * in that case $fake will be a database or API Class
         */
        all() {
            console.log($fake.fake);
        },
    }
}