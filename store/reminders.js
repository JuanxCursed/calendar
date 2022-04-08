import ReminderModel from '@/models/ReminderModel'

export const state = () => ({
  reminders: [],
})

export const mutations = {
  ADD_REMINDER(state, reminder) {
    state.reminders.push(reminder)
  },

}

export const actions = {
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