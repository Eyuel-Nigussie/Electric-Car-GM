<template>
  <q-page id="myDetails">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>My Details</q-toolbar-title>
    </q-toolbar>

    <q-scroll-area style="height:800px;"
    class="form-style"
    >

        <div class="q-pa-md q-gutter-md">
          <div class="text-h6">Update your details</div>

          <q-input outlined stack-label label="First Name">
              <template v-slot:append>
                <q-icon name="close"/>
              </template>
          </q-input>

          <q-input outlined stack-label label="Last Name">
              <template v-slot:append>
                <q-icon name="close"/>
              </template>
          </q-input>

          <div class="text-yellow-10 text-bold q-mt-md">NOTE: This email is read only</div>

          <q-input outlined stack-label readonly label="Email" />

          <div>
            <q-btn color="black" label="UPDATE DETAILS" size="lg" class="full-width" />
          </div>

        </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup></script>

<style lang="scss">
#myDetails{
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
