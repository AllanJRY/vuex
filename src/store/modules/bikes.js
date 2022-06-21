const state = {
    bikes: [
        {
            id: '8cabfbb3-e7ab-487e-9425-8ec2ccb2cc2d',
            name: 'VTT',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, debitis fugiat hic in incidunt.',
            price: 299.99,
        },
        {
            id: '210190c9-d581-4048-9612-8cee5fa2702b',
            name: 'Vélo électrique',
            description: 'Iusto labore magni porro reiciendis sit, voluptas voluptatem voluptates. Accusantium adipisci dolore eum molestiae placeat.',
            price: 159.00,
        },
        {
            id: 'f1a315f0-555e-49e8-aabc-bdfa963392e2',
            name: 'Vélo de ville',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum odio quibusdam.',
            price: 99.99,
        },

        {
            id: '610d818f-a61a-4cb6-b92a-e5424c150c93',
            name: 'Vélo de route',
            description: 'Accusamus atque, autem, dicta doloremque est facere illo laboriosam modi necessitatibus nisi optio, perferendis placeat quod temporibus velit!',
            price: 350.00,
        },
    ]
}

const getters = {
    bikes: state => {
        return state.bikes;
    }
}

const mutations = { }

const actions = { }

const modules = { }

export default {
    state,
    getters,
    mutations,
    actions,
    modules,
}