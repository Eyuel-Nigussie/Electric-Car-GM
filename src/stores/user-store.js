import { defineStore } from 'pinia'
import { server } from 'src/boot/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    firstName: null,
    lastName: null,
    email: null
  }),

  getters: {
    getId: (state) => state.id,
    getFirstName: (state) => state.firstName,
    getLastName: (state) => state.lastName,
    getEmail: (state) => state.email
  },

  actions: {

    async getSanctumCookie () {
      try {
        await server.get('sanctum/csrf-cookie')
      } catch (error) {
        if (error) throw error
      }
    },

    async login (email, password) {
      try {
        await server.post('login', { email, password })
      } catch (error) {
        if (error) throw error
      }
    },

    async register (firstName, lastName, email, password, confirmPassword) {
      try {
        await server.post('register', {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          password_confirmation: confirmPassword
        })
      } catch (error) {
        if (error) throw error
      }
    },

    async fetchUser () {
      try {
        return await server.get('api/user')
      } catch (error) {
        if (error) throw error
      }
    },

    setUser (payload) {
      if (payload.id) this.id = payload.id
      if (payload.firstName) this.firstName = payload.first_name
      if (payload.last_name) this.lastName = payload.last_name
      if (payload.email) this.email = payload.email
    },

    clearUser () {
      this.id = null
      this.firstName = null
      this.lastName = null
      this.email = null
    }
  },
  persist: true
})
