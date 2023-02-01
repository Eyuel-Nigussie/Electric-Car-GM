<template>
  <q-page id="AccountMenu">

    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>Account</q-toolbar-title>
    </q-toolbar>

    <div class="text-h6 text-center q-pa-xl">
            <q-avatar color="green" size="60px">JD</q-avatar>
            <div>John Doe</div>
    </div>

    <div class="menu">
      <q-separator/>
      <q-list>
        <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar rounded color="primary" icon="account_box" text-color="white"/>
            </q-item-section>

            <q-item-section class="text-size">My Details</q-item-section>

            <q-item-section side>
              <q-icon name="arrow_right"/>
            </q-item-section>
        </q-item>
      </q-list>
      <q-separator/>
      <q-list>
        <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar rounded color="red" icon="logout" text-color="white"/>
            </q-item-section>

            <q-item-section class="text-size">Logout</q-item-section>

            <q-item-section side>
              <q-icon name="arrow_right"/>
            </q-item-section>
        </q-item>
      </q-list>
    </div>

  </q-page>
</template>

<script setup></script>

<style lang="scss">
#AccountMenu{
 .menu{
  margin: 0 auto;
  max-width:500px;
 }
 .text-size{
  font-size: 18px;
 }
}
</style>
