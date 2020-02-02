export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
    routes: [{
        path: '/',
        component: './HelloWorld',
    },
    {
        path: 'abc',
        component:'./ShoppingList'
    },
    {
        path: 'content',
        component:'./Content'
    },
    {
        path: 'demo',
        component:'./Demo'
    },
    {
        path: 'subgroup',
        component:'./SubGroup'
    }
    ],
};