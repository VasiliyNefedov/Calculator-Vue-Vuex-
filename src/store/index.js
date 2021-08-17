import {createStore} from 'vuex'
// import math from "mathjs";
import {create, all} from 'mathjs'

const math = create(all)

export default createStore({
    state: {
        currentValue: '0',
        previousValue: '',
        result: false,
        previousAction: ''
    },
    mutations: {
        setCurrentValue(state, value) {
            if (state.currentValue === '0') state.currentValue = ''
            if ((String(state.currentValue).includes('.') && value === '.') || state.currentValue.length > 8) return
            if (state.result) {
                state.currentValue = ''
                state.result = false
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
            state.previousValue = ''
            state.result = 0
        },
        setPreviousValue(state, action) {
            // const variable = state.totalString + ' ' + state.currentValue
            if (state.previousValue === '') {
                state.previousValue = state.currentValue
                state.currentValue = '0'
            } else {
                state.previousValue = math.evaluate(state.previousValue + state.previousAction + state.currentValue)
                state.currentValue = '0'
            }
            state.previousAction = action
        },
        setResult(state) {
            state.currentValue = math.evaluate(state.previousValue + state.previousAction + state.currentValue)
            if (state.currentValue === Infinity) state.currentValue = 'ERROR'
            state.result = true
            state.previousValue = ''
        },
        negateCurrentValue(state) {
            state.currentValue = math.evaluate(state.currentValue + ' * (-1)')
        }
    },
    actions: {
        pushNumber(ctx, number) {
            if (number === ',') number = '.'
            ctx.commit('setCurrentValue', number)
        },
        pressMathAction(ctx, action) {
            if (action === '=') {
                ctx.commit('setResult')
            } else if (action === '+/-') {
                ctx.commit('negateCurrentValue')
            } else ctx.commit('setPreviousValue', action)
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
            return state.previousValue
        },
    },
    modules: {}
})
