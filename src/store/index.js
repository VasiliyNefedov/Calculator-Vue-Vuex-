import {createStore} from 'vuex'
import math from "mathjs";

export default createStore({
    state: {
        currentValue: '0',
        totalString: '',
        numA: null,
        result: 0
    },
    mutations: {
        setCurrentValue(state, value) {
            if (state.currentValue === '0') state.currentValue = ''
            if ((state.currentValue.includes(',') && value === ',') || state.currentValue.length > 8) {
                return
            }
            state.currentValue += value
        },
        // setResult(state, numA, action) {
        //     state.result = numA
        // },
        setCE(state) {
            state.currentValue = '0'
        },
        setAC(state) {
            state.currentValue = '0'
            state.totalString = ''
            state.result = 0
            state.numA = null
        },
        setTotalString(state, action) {
            // const variable = state.totalString + ' ' + state.currentValue
            state.totalString = state.totalString + ' ' + state.currentValue + ' ' + action
            state.currentValue = '0'
        },
        setResult(state) {
            const variable = state.totalString + ' ' + state.currentValue
            console.log(math)
            state.result = math.evaluate(variable)
            state.currentValue = state.result
            state.totalString = ''
        },
    },
    actions: {
        pushNumber(ctx, number) {
            ctx.commit('setCurrentValue', number)
        },
        pressMathAction(ctx, action) {
            if (action === '=') {

                ctx.commit('setResult')
            }
            else ctx.commit('setTotalString', action)
        },
        clean(ctx, cleanType) {
            if (cleanType === 'CE') ctx.commit('setCE')
            if (cleanType === 'AC') ctx.commit('setAC')
        },

    },
    getters: {
        getCurrentValue(state) {
            return state.currentValue
        },
        getTotalString(state) {
            return state.totalString
        },
    },
    modules: {}
})
