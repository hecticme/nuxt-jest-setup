<template>
  <div
    id="app"
    class="app-container"
  >
    <TheHeader />

    <main class="main-container">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  flex: 1;
  max-width: 80rem;
  margin-inline: auto;
}
</style>
