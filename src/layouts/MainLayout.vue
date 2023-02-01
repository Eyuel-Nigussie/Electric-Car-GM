<template>
  <q-layout >
    <q-header class="bg-teal">
      <q-toolbar>

        <q-toolbar-title>
          Electric Vehicle Charge
        </q-toolbar-title>

        <q-btn dense flat  icon="login"/>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs class="text-light bg-teal">
        <q-route-tab to="/map" name="/map" icon="explore" label="Map" />
        <q-route-tab to="/route" name="/route" icon="directions" label="Routes" />
        <q-route-tab to="/auth" name="/auth" icon="login" label="Login" />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script setup>

</script>
