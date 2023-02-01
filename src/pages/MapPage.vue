<template>
  <div id="map">

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { googleObject } from '../boot/google'

onMounted(async () => {
  await googleObject()
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  })
  console.log(map)
})
</script>

<style lang="scss"></style>
