<template>
  <q-page id="registrationPage  ">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>Register</q-toolbar-title>
    </q-toolbar>

    <q-scroll-area style="height:800px;"
    class="form-style"
    >
        <div class="text-h6 text-center q-pt-md">
            <q-img src="favicon.ico" height="60px" width="60px" />
            <div>EV Charge Map</div>
        </div>

        <div class="q-pa-md q-gutter-md">
          <div class="text-center ">Register and get extra features</div>

          <q-input v-model="firstName" outlined stack-label label="First Name">
              <template v-slot:append>
                <q-icon name="close"/>
              </template>
          </q-input>

          <q-input v-model="lastName" outlined stack-label label="Last Name">
              <template v-slot:append>
                <q-icon name="close"/>
              </template>
          </q-input>

          <q-input v-model="email" outlined stack-label label="Email">
              <template v-slot:append>
                <q-icon name="close"/>
              </template>
          </q-input>

          <q-input v-model="password"  outlined stack-label label="Password">
              <template v-slot:append>
                <q-icon name="close"/>
              </template>
          </q-input>

          <q-input v-model="confirmPassword" outlined stack-label label="Confirm Password">
              <template v-slot:append>
                <q-icon name="close"/>
              </template>
          </q-input>

          <div>
            <q-btn @click="register" color="black" label="Register" size="lg" class="full-width" />
          </div>

        </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../stores/user-store'

const userStore = useUserStore()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = async () => {
  try {
    // Get the token/cookie
    await userStore.getSanctumCookie()
    // Register user
    await userStore.register(
      firstName.value,
      lastName.value,
      email.value,
      password.value,
      confirmPassword.value
    )
    // Get the user
    const user = await userStore.fetchUser()
    console.log(user)
    // set user data in localstorage (PINIA)
    userStore.setUser(user.data)
  } catch (error) {
    console.log(error)
  }
}

</script>

<style lang="scss">
#registrationPage{
  .form-style{
    margin: 0 auto;
    height: calc(100% -180px);
    max-width: 500px  ;
  }
}
</style>
