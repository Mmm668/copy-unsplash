const store = {
    state: {
        myAccount: {
            id: 'id_my123',
            icon: '',
            name: 'my123'
        },
        photos: [
            {
                imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                name: 'foo1',
                user: {
                    id: 'userNameTest1',
                    icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                    name: 'username Test1',
                },
                related: [
                    {
                        imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        name: 'boo1',
                        user: {
                            id: 'related1',
                            icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                            name: 'username Test1',
                        },
                    },
                    {
                        imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        name: 'boo1',
                        user: {
                            id: 'related2',
                            icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                            name: 'username Test1',
                        },
                    },
                    {
                        imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        name: 'boo1',
                        user: {
                            id: 'related3',
                            icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                            name: 'username Test1',
                        },
                    }
                ]
            },
            {
                imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                name: 'foo2',
                user: {
                    id: 'userNameTest2',
                    icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                    name: 'username Test1',
                },
                related: [
                    {
                        imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        name: 'boo1',
                        user: {
                            id: 'related1',
                            icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                            name: 'username Test1',
                        },
                    },
                    {
                        imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        name: 'boo1',
                        user: {
                            id: 'related2',
                            icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                            name: 'username Test1',
                        },
                    },
                    {
                        imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        name: 'boo1',
                        user: {
                            id: 'related3',
                            icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                            name: 'username Test1',
                        },
                    }
                ]
            },
            {
                imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                name: 'foo3',
                user: {
                    id: 'userNameTest3',
                    icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                    name: 'username Test1',
                },
                related: [
                    {
                        imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        name: 'boo1',
                        user: {
                            id: 'related1',
                            icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                            name: 'username Test1',
                        },
                    },
                    {
                        imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        name: 'boo1',
                        user: {
                            id: 'related2',
                            icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                            name: 'username Test1',
                        },
                    },
                    {
                        imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        name: 'boo1',
                        user: {
                            id: 'related3',
                            icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                            name: 'username Test1',
                        },
                    }
                ]
            },
            {
                imageUrl: 'https://images.unsplash.com/photo-1574347693846-502bd1c08561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                name: 'foo4',
                user: {
                    id: 'userNameTest4',
                    icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                    name: 'username Test1',
                },
                related: []
            },

            {
                imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                name: 'foo5',
                user: {
                    id: 'userNameTest5',
                    icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                    name: 'username Test1',
                },
                related: []
            },
            {
                imageUrl: 'https://images.unsplash.com/photo-1574347693846-502bd1c08561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                name: 'foo6',
                user: {
                    id: 'userNameTest6',
                    icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                    name: 'username Test1',
                },
                related: []
            },
            {
                imageUrl: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                name: 'foo7',
                user: {
                    id: 'userNameTest3',
                    icon: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
                    name: 'username Test7',
                },
                related: []
            },
        ],
        search: [
            // {
            //     imageUrl :'https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            //     name: 'car',
            // },
            // {
            //     imageUrl :'https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            //     name: 'car',
            // },
        ],
        bigCategory: [
            {
                name: 'editorial',
                url: '/editorial'
            },
            {
                name: 'wallpapers',
                url: '/wallpapers'
            },
            {
                name: 'textues & patterns',
                url: '/textues_patterns'
            },
            {
                name: 'nature',
                url: '/nature'
            },
            {
                name: 'current events',
                url: '/current_events'
            },
            {
                name: 'architecture',
                url: '/architecture'
            },
            {
                name: 'business & work',
                url: '/business_work'
            },
            {
                name: 'film',
                url: '/film'
            },

            {
                name: 'textues & patterns',
                url: '/textues_patterns'
            },
            {
                name: 'nature',
                url: '/nature'
            },
            {
                name: 'current events',
                url: '/current_events'
            },
            {
                name: 'architecture',
                url: '/architecture'
            },
            {
                name: 'business & work',
                url: '/business_work'
            },
            {
                name: 'film',
                url: '/film'
            },
        ],

    }
}

export default store;