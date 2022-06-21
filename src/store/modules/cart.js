const state = {
    cart: {
        products: [],
    },
}

const getters = {
    cartProducts: state => {
        return state.cart.products;
    },
    cartProductsCount: state => {
        return state.cart.products.length;
    },
    cartTotalPrice: state => {
        let totalPrice = 0;
        state.cart.products.forEach(cartProduct => totalPrice += (cartProduct.quantity * cartProduct.bike.price));

        return totalPrice;
    },
}

const mutations = {
    addBikeToCart: (state, bike) => {
        let alreadyInCart = false;
        state.cart.products.forEach(cartProduct => {
            if (cartProduct.bike === bike) {
                cartProduct.quantity++;
                alreadyInCart = true;
            }
        });

        if (!alreadyInCart) {
            state.cart.products.push({bike, quantity: 1});
        }
    },
    removeBikeFromCart: (state, {bike, quantity}) => {
        let toRemove = false;

        state.cart.products.forEach(cartProduct => {
            if (cartProduct.bike === bike) {
                if (cartProduct.quantity > quantity) {
                    cartProduct.quantity -= quantity;
                } else {
                    toRemove = true;
                }
            }
        });

        if (toRemove) {
            state.cart.products = state.cart.products.filter(cartProduct => cartProduct.bike !== bike);
        }
    },
    updateBikeFromCart: (state, {bike, quantity}) => {
        let toRemove = false;

        state.cart.products.forEach(cartProduct => {
            if (cartProduct.bike === bike) {
                if (quantity > 0) {
                    cartProduct.quantity = quantity;
                } else {
                    toRemove = true;
                }
            }
        });

        if (toRemove) {
            state.cart.products = state.cart.products.filter(cartProduct => cartProduct.bike !== bike);
        }
    },
    emptyCart: (state) => {
        state.cart.products = [];
    }
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