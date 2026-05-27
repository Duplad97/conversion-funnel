<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="app-bar">
    <div class="app-bar__content">
      <h1>Popup Funnel Health</h1>
    </div>
  </header>

  <main class="app-shell">
    <RouterView />
  </main>
</template>

<style scoped></style>
