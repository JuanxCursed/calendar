import { mount, createLocalVue, shallowMount, config } from '@vue/test-utils'
import Vuex from "vuex"
import Calendar from '@/components/Calendar/Calendar.vue'

import ReminderForm from '@/components/Calendar/Reminder/ReminderForm.vue'
import remindersMock from '@/test/reminders.mock'
import * as remindersStore from '@/store/reminders'
import ReminderModel from '../models/ReminderModel'

const localVue = createLocalVue()
localVue.use(Vuex)

const mockState = {
    reminders: remindersMock.reminders,
}
let store = new Vuex.Store({ state: mockState })

const json = { name: 'Teste', date: '2022-04-08T02:00', city: 'Guarulhos', color: '#3cbe63' }
const model = new ReminderModel(json)
const mock = {
    store,
    localVue,
    mocks: {
        $t: t => t
    },
}


describe('Calendar', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(Calendar, mock)
        expect(wrapper.vm).toBeTruthy()
    })
})

describe('ReminderForm', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(ReminderForm, mock)
        expect(wrapper.vm).toBeTruthy()
    })
})

describe('@/store/reminders', () => {
    let actions
    let mutations

    const cloneStore = {...remindersStore }

    beforeEach(() => {
        actions = cloneStore.actions
        mutations = cloneStore.mutations
    })

    it('create reminder', () => {
        const commit = jest.fn()
        actions.CREATE({ commit }, model)

        expect(commit).toHaveBeenCalledWith('ADD_REMINDER', expect.anything())
    })
})