const state = {
    orders: [],
}

const getters = {
    orders: state => {
        return state.orders;
    },
}

const mutations = {
    saveOrder: (state, {id, products, totalPrice}) => {
        state.orders.push({
            id,
            products,
            totalPrice,
        });
    },
}

const actions = {
    saveOrder: ({commit}, {products, totalPrice}) => {
        const orderId = Math.floor(Math.random() * (999999 - 1)) + 1;

        commit('saveOrder', {
            id: orderId,
            products,
            totalPrice,
        });

        commit('reduceWallet', totalPrice);

        commit('emptyCart');
    },
}

const modules = { }

export default {
    state,
    getters,
    mutations,
    actions,
    modules,
}