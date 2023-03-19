import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            isAuthenticated: false,
            user: null
        }
    },
    mutations: {
      login(state, user) {
        state.isAuthenticated = true
        state.user = user
      },
      logout(state) {
        state.isAuthenticated = false
        state.user = null
      }
    },
    actions: {
      login({ commit }, user) {
        // 사용자 인증 로직
        commit('login', user)
      },
      logout({ commit }) {
        // 사용자 로그아웃 로직
        commit('logout')
      }
    },
    plugins: [
      createPersistedState()
    ]
})

export default store;