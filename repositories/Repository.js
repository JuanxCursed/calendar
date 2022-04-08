import ReminderRepository from "./reminderRepository";

export default ($fake) => {
    return {
        reminderRepository: ReminderRepository($fake),
    }
}