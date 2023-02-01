<template>
  <q-page id="loginPage">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>Login</q-toolbar-title>
    </q-toolbar>

    <div>
        <div class="text-h6 text-center q-pt-md">
            <q-img src="favicon.ico" height="60px" width="60px" />
            <div>EV Charge Map</div>
        </div>

        <div class="q-pa-md q-gutter-md">
          <div class="text-center ">Register and get extra features</div>

          <q-input v-model="email" outlined stack-label label="Email">
              <template v-slot:append>
                <q-icon name="close"/>
              </template>
          </q-input>

          <q-input v-model="password" outlined stack-label label="Password">
              <template v-slot:append>
                <q-icon name="close"/>
              </template>
          </q-input>

          <div>
            <q-btn @click="login" color="black" label="LOGIN" size="lg" class="full-width" />
          </div>

          <div class="q-px-md q-mt-xl text-center">
            <div class="q-mt-md no-account">Don't have an account</div>
            <q-btn color="teal" outline rounded to="/auth/register" size="15px">Register Here </q-btn>
          </div>

        </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../stores/user-store'

const userStore = useUserStore()

const email = ref('')
const password = ref('')

const login = async () => {
  try {
    // Get the token/cookie
    await userStore.getSanctumCookie()
    // Login user
    // await userStore.login(email.value, password.value)
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
#loginPage{
  .form-style{
    margin: 0 auto;
    height: calc(100% -180px);
    max-width: 500px  ;
  }
  .no-account{
    font-size: 17px;
  }
}
</style>
