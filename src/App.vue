<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar color="primary" density="comfortable" flat>
      <v-container class="d-flex align-center px-4" fluid>
        <v-toolbar-title class="font-weight-bold">Popup Funnel Health</v-toolbar-title>
        <v-spacer />
        <v-chip color="secondary" variant="tonal" size="small">Vuetify 4</v-chip>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container class="py-6" fluid style="max-width: 1180px">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
