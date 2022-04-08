export default ($fake) => {
    return {
        async action() {
            console.log($fake.fake);
        },
    }
}