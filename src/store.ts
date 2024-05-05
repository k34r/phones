import { createStore } from 'vuex'
import axios from 'axios'

export interface Product {
    id: number
    picture: string
    name: string
    make: string
    year: string
    diag: string
    country: string
    memory: string
    freq: string
    NFC: string
    ESIM: string
    wireles: string
    price: string
}

export interface State {
    phonesOnPage: Number
    products: Array<Product>
}


export const store = createStore<State>({
    state: {
        phonesOnPage: 3,
        products: [
            {
              id: 0,
              picture: '/src/pictures/products/apple_iphone12.png',
              name: 'Apple iPhone 12',
              make: 'Apple',
              year: '2020',
              diag: '6,1',
              country: 'Китай',
              memory: '128 Гб',
              freq: '60 Гц',
              NFC: '/src/pictures/not-icon.png',
              ESIM: '/src/pictures/yes-icon.png',
              wireles: '/src/pictures/yes-icon.png',
              price: '81 990  ₽'
            },
            {
              id: 1,
              picture: '/src/pictures/products/Xiaomi_mi11_lite.png',
              name: 'Xiaomi Mi 11 Lite ',
              make: 'Xiaomi',
              year: '2021',
              diag: '6,55',
              country: 'Китай',
              memory: '128 Гб',
              freq: '90 Гц',
              NFC: '/src/pictures/yes-icon.png',
              ESIM: '/src/pictures/yes-icon.png',
              wireles: '/src/pictures/not-icon.png',
              price: '27 490 ₽'
            },
            {
              id: 2,
              picture: '/src/pictures/products/Samsung_galaxy_a72.png',
              name: 'Samsung Galaxy A72',
              make: 'Samsung',
              year: '2021',
              diag: '6,7',
              country: 'Вьетнам',
              memory: '128 Гб',
              freq: '90 Гц',
              NFC: '/src/pictures/yes-icon.png',
              ESIM: '/src/pictures/not-icon.png',
              wireles: '/src/pictures/yes-icon.png',
              price: '32 890 ₽'
            },
            {
              id: 3,
              picture: '/src/pictures/products/samsung_galaxy_s21.jpg',
              name: 'Samsung Galaxy S21',
              make: 'Samsung',
              year: '2020',
              diag: '6,2',
              country: 'Китай',
              memory: '128 Гб',
              freq: '120 Гц',
              NFC: '/src/pictures/not-icon.png',
              ESIM: '/src/pictures/yes-icon.png',
              wireles: '/src/pictures/yes-icon.png',
              price: '96 455   ₽'
            },
            {
              id: 4,
              picture: '/src/pictures/products/apple_iphone_xr.jpg',
              name: 'Apple A12 Bionic',
              make: 'Apple',
              year: '2021',
              diag: '6,1',
              country: 'Китай',
              memory: '128 Гб',
              freq: '60 Гц',
              NFC: '/src/pictures/yes-icon.png',
              ESIM: '/src/pictures/yes-icon.png',
              wireles: '/src/pictures/not-icon.png',
              price: '87 490 ₽'
            },
            {
              id: 5,
              picture: '/src/pictures/products/realme_8_pro.jpg',
              name: 'REALME 8 Pro 6',
              make: 'REALME',
              year: '2021',
              diag: '6,4',
              country: 'Вьетнам',
              memory: '128 Гб',
              freq: '60 Гц',
              NFC: '/src/pictures/yes-icon.png',
              ESIM: '/src/pictures/not-icon.png',
              wireles: '/src/pictures/yes-icon.png',
              price: '62 890 ₽'
            }
          ]
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products: Array<Product>) => {
            state.products = products
        },
       SET_COUNT : (state, count: Number) => {
          state.phonesOnPage = count
        } 
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('url',{method: 'GET'})
            .then((response) => {
                const products = response.data;
                commit('SET_PRODUCTS_TO_STATE', products)
                return products
            })
            .catch( error => {
                console.log(error)
                return error
             })
        },
        CHANGE_CARD_TO_SHOW({commit}, count: Number) {
          commit('SET_COUNT', count)
        }
    },
    getters: {
        PRODUCTS(state): Array<Product> {
            return state.products
        }
    }    
})




