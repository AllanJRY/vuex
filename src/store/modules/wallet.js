const state = {
    wallet: 500,
}

const getters = {
    funds: state => {
        return state.wallet;
    }
}

const mutations = {
    reduceWallet: (state, amount) => {
        console.log('ici');
        state.wallet -= amount;
    },
}

const actions = { }

const modules = { }

export default {
    state,
    getters,
    mutations,
    actions,
    modules,
}