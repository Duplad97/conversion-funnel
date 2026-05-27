<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar class="app-bar" color="primary" density="comfortable" flat>
      <v-container class="d-flex align-center px-4" fluid>
        <v-toolbar-title class="font-weight-bold">Conversion Funnel</v-toolbar-title>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container class="py-6" fluid style="max-width: 1180px">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.app-bar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: saturate(130%) blur(6px);
}
</style>
