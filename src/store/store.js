import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

// import menu from './module/menu'
// import users from './module/user'
// import status from './module/status'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        //设置属性
        menuItems: {
        },
        currentUser: null,
        isLogin: false
    },
    getters,
    mutations,
    actions

    // modules: {
    //     menu,
    //     users,
    //     status
    // }
})