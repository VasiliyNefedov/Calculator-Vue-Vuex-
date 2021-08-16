import {createStore} from 'vuex'

export default createStore({
    state: {
        currentValue: '0',
        totalString: ''
    },
    mutations: {
        setCurrentValue(state, value) {
            if (state.currentValue == '0') state.currentValue = ''
            if (!state.currentValue.includes(',')) {
                state.currentValue += value
            }
        }
    },
    actions: {
        pushNumber(ctx, number) {
            ctx.commit('setCurrentValue', number)
        }
    },
    getters: {
        getCurrentValue(state) {
            return state.currentValue
        }
    },
    modules: {}
})
