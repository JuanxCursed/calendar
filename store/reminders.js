import ReminderModel from '@/models/ReminderModel'

export const state = () => ({
    reminders: [],
})

export const mutations = {
    SET_REMINDERS(state, reminders) {
        state.reminders = reminders;
    },
    ADD_REMINDER(state, reminder) {
        state.reminders.push(reminder)
    },

}

export const actions = {
    /**
     * This is how I would do it if I had a backend service making use of this.$repositories injection system
     * but there is no need, since I'm using a fake database for this example with persisting data on cookies
     */
    // ALL({ commit }) {
    //   const reminder = this.$repositories.reminderRepository.all();
    //   commit('SET_REMINDERS', reminder)
    //   return reminder
    // },

    CREATE({ commit }, payload) {
        validateModelType(payload);
        const reminder = new ReminderModel(payload)
        commit('ADD_REMINDER', reminder)
        return reminder
    }
}

const validateModelType = (model) => {
    if (!model)
        throw new Error("Reminder is required");
    if (!(model instanceof ReminderModel))
        throw new Error(`Reminder isn't of type [ReminderModel], was supplied: ${typeof model}`);
}