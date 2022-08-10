import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        infoProduct: null,
        cartItems: [],
        items: [{
                id: 0,
                img: require('@/assets/1.jpg'),
                title: 'Santa fento sofa',
                price: 156,
                color: 'white',
                type: 'sofa',
                rating: 4.5
            }, {
                id: 1,
                img: require('@/assets/2.jpg'),
                title: 'Lamp model orange',
                price: 756,
                color: 'black',
                type: 'lamp',
                rating: 4.0
            }, {
                id: 2,
                img: require('@/assets/3.jpg'),
                title: 'Chair fotal blue',
                price: 362,
                color: 'blue',
                type: 'chair',
                rating: 4.5
            }, {
                id: 3,
                img: require('@/assets/4.jpg'),
                title: 'Chair fotal',
                price: 505,
                color: 'black',
                type: 'chair',
                rating: 4.5
            }, {
                id: 4,
                img: require('@/assets/5.jpg'),
                title: 'Black Monblank Sofa',
                price: 243,
                color: 'black',
                type: 'sofa',
                rating: 4.0
            }, {
                id: 5,
                img: require('@/assets/6.jpg'),
                title: 'Black Handmade Fotal ',
                price: 44,
                color: 'black',
                type: 'sofa',
                rating: 3.0
            }, {
                id: 6,
                img: require('@/assets/7.jpg'),
                title: 'Blue Chair ',
                price: 505,
                color: 'blue',
                type: 'chair',
                rating: 3.5
            }, {
                id: 7,
                img: require('@/assets/8.jpg'),
                title: 'Blue Chair For Sofa',
                price: 432,
                color: 'blue',
                type: 'chair',
                rating: 4.0
            },
            {
                id: 8,
                img: require('@/assets/9.jpg'),
                title: 'Lamp for Kitchen',
                price: 390,
                color: 'grey',
                type: 'lamp',
                rating: 4.5
            },
            {
                id: 9,
                img: require('@/assets/10.jpg'),
                title: 'Brown Sofa for home',
                price: 756,
                color: 'brown',
                type: 'sofa',
                rating: 4.0
            },
            {
                id: 10,
                img: require('@/assets/11.jpg'),
                title: 'Lamp for Home',
                price: 44,
                color: 'black',
                type: 'lamp',
                rating: 4.0
            },
            {
                id: 11,
                img: require('@/assets/12.jpg'),
                title: 'Blue beatiful Sofa ',
                price: 156,
                color: 'blue',
                type: 'chair',
                rating: 4.0
            },
            {
                id: 12,
                img: require('@/assets/13.jpg'),
                title: 'Blue Sofa Handmade',
                price: 756,
                color: 'blue',
                type: 'sofa',
                rating: 4.0
            },
            {
                id: 13,
                img: require('@/assets/14.jpg'),
                title: 'Black Chair Handmade',
                price: 756,
                color: 'black',
                type: 'chair',
                rating: 4.0
            },
            {
                id: 14,
                img: require('@/assets/table-1.jpg'),
                title: 'White table',
                price: 756,
                color: 'white',
                type: 'table',
                rating: 4.0
            },
            {
                id: 15,
                img: require('@/assets/images/products/notebooks/MSI.jpg'),
                title: 'MSI core-i7 protsessor',
                price: 800,
                color: 'black',
                type: 'notebook',
                rating: 4.0
            },
            {
                id: 16,
                img: require('@/assets/images/products/notebooks/SAMSUNG.jpg'),
                title: 'SAMSUNG Chrome Book',
                price: 700,
                color: 'grey',
                type: 'notebook',
                rating: 4.0
            },
            {
                id: 17,
                img: require('@/assets/images/products/notebooks/LENOVOIDEAPAD.jpg'),
                title: 'Lenovo Ideapad Core-i5',
                price: 800,
                color: 'grey',
                type: 'notebook',
                rating: 4.0
            },
            {
                id: 18,
                img: require('@/assets/images/products/notebooks/MACBOOK.jpg'),
                title: 'Macbook Air M1',
                price: 700,
                color: 'grey',
                type: 'notebook',
                rating: 4.0
            },
            {
                id: 19,
                img: require('@/assets/images/products/notebooks/ASUSVIVIBOOK.jpg'),
                title: 'ASUS Vivobook Core-i7',
                price: 700,
                color: 'grey',
                type: 'notebook',
                rating: 4.0
            },
            {
                id: 20,
                img: require('@/assets/images/products/notebooks/ASUS.jpg'),
                title: 'ASUS Espire',
                price: 800,
                color: 'black',
                type: 'notebook',
                rating: 4.0
            },
            {
                id: 21,
                img: require('@/assets/images/products/smartphones/iphone13pro3.png'),
                title: 'iPhone 13 PRO MAX',
                price: 1200,
                color: 'blue',
                type: 'smartphone',
                rating: 5.0
            }, {
                id: 22,
                img: require('@/assets/images/products/smartphones/iphone13pro1.png'),
                title: 'Apple iPhone 13 64GB',
                price: 1000,
                color: 'blue',
                type: 'smartphone',
                rating: 4.5
            }, {
                id: 23,
                img: require('@/assets/images/products/smartphones/IPHONE12.jpg'),
                title: 'Apple iPhone 12',
                price: 900,
                color: 'white',
                type: 'smartphone',
                rating: 4.0
            }, {
                id: 24,
                img: require('@/assets/images/products/smartphones/IPHONESE.jpg'),
                title: 'Apple iPhone SE',
                price: 500,
                color: 'black',
                type: 'smartphone',
                rating: 4.0
            }, {
                id: 25,
                img: require('@/assets/images/products/smartphones/SAMSUNGGALAXYS21.jpg'),
                title: 'Samsung Galaxy S21',
                price: 1000,
                color: 'white',
                type: 'smartphone',
                rating: 5.0
            }, {
                id: 26,
                img: require('@/assets/images/products/smartphones/SAMSUNGZFLIP.jpg'),
                title: 'Samsung Galaxy Z FLIP',
                price: 800,
                color: 'black',
                type: 'smartphone',
                rating: 4.5
            }, {
                id: 27,
                img: require('@/assets/images/products/smartphones/SONYXPERIA1III.jpg'),
                title: 'Sony Xperia A1 III',
                price: 900,
                color: 'black',
                type: 'smartphone',
                rating: 4.0
            }, {
                id: 28,
                img: require('@/assets/images/products/smartphones/ONEPLUSNORD.jpg'),
                title: 'One Plus Nord',
                price: 700,
                color: 'blue',
                type: 'smartphone',
                rating: 4.0
            }, {
                id: 29,
                img: require('@/assets/images/products/smartwatches/AMAZFITBIP.jpg'),
                title: 'Amazfit Bip Super',
                price: 100,
                color: 'black',
                type: 'smartwatch',
                rating: 4.0
            },
            {
                id: 30,
                img: require('@/assets/images/products/smartwatches/AMAZFITGTR.jpg'),
                title: 'Amazfit GTR Max',
                price: 80,
                color: 'grey',
                type: 'smartwatch',
                rating: 4.0
            },
            {
                id: 31,
                img: require('@/assets/images/products/smartwatches/APPLEWATCH7.jpg'),
                title: 'Apple Watch Series 7',
                price: 400,
                color: 'blue',
                type: 'smartwatch',
                rating: 4.0
            },
            {
                id: 32,
                img: require('@/assets/images/products/smartwatches/GARMINEPIX.jpg'),
                title: 'Garmin Epix',
                price: 120,
                color: 'white',
                type: 'smartwatch',
                rating: 4.0
            },
            {
                id: 33,
                img: require('@/assets/images/products/smartwatches/SAMSUNG3.jpg'),
                title: 'Samsung G3',
                price: 80,
                color: 'black',
                type: 'smartwatch',
                rating: 4.0
            },
            {
                id: 34,
                img: require('@/assets/images/products/smartwatches/APPLEWATCHSE.jpg'),
                title: 'Apple Watch SE',
                price: 300,
                color: 'blue',
                type: 'smartwatch',
                rating: 4.0
            },
        ],
        searched: null
    },
    getters: {
        searched(state) {
            return state.searched
        },
        itemsNumber(state) { // Cart Component
            return state.cartItems.reduce((acc, item) => (acc += item.quantity), 0)
        },
        totalPrice(state) { // Cart Component
            if (state.cartItems.length != 0) {
                return state.cartItems.reduce((a, b) => {
                    return (b.price == null) ? a : a + b.price
                }, 0)
            }
        },

        cartTotal: state => { // Cart Component
            return state.cartItems.reduce((acc, cartItem) => {
                return (cartItem.quantity * cartItem.price) + acc;
            }, 0).toFixed(2);
        },
    },
    mutations: {
        'SEARCH_PRODUCT' (state, name) {
            return this.state.searched = state.items.filter(
                (e) => e.title.match(name) || e.type.match(name)
            )
        },
        'IN_CART' (state, aProduct) {
            const newCartProduct = {
                id: aProduct.id,
                title: aProduct.title,
                price: aProduct.price,
                img: aProduct.img,
                color: aProduct.color,
                type: aProduct.type,
                rating: aProduct.rating,
                quantity: 1
            };
            let cartProductExists = false;
            state.cartItems.map((cartProduct) => {
                if (cartProduct.id === newCartProduct.id) {
                    cartProduct.quantity++;
                    cartProductExists = true;
                }
            });
            if (!cartProductExists) state.cartItems.push(newCartProduct);
        },
        'BUY' (state, aProduct) {
            let cartProductExists = false;
            state.cartItems.map((cartProduct) => {
                if (cartProduct.id === aProduct.id) {
                    cartProduct.quantity = aProduct.quantity;
                    cartProductExists = true;
                }
            })
            if (!cartProductExists) state.cartItems.push(aProduct);
        },
        'OUT_CART' (state, aProduct) {
            state.cartItems.map((cartProduct) => {
                if (cartProduct.id === aProduct.id && cartProduct.quantity > 1) {
                    cartProduct.quantity--;
                }
                cartProduct.quantity
            })
        },
        'PLUS_CART' (state, id) {
            state.cartItems.map((cartProduct) => {
                if (cartProduct.id === id) {
                    cartProduct.quantity++;
                }
                cartProduct.quantity
            });
        },
        'DELETE_CART' (state, aProduct) { // Cart Component
            state.cartItems.map((cartProduct) => {
                if (cartProduct.id === aProduct.id) {
                    state.cartItems.pop(aProduct);
                }
                state.cartItems
            });
        },
        'INFO_PRODUCT' (state, n) { // Info Component
            state.infoProduct = n
        }
    },
    actions: {

    },
    modules: {
        auth
    }
})