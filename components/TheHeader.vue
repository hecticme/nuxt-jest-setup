<template>
  <header class="header">
    <div class="header-inner">
      <NuxtLink to="/">
        Home
      </NuxtLink>

      <NuxtLink to="/playground">
        Playground
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  padding-inline: 0.5rem;
  padding-block: 1rem;
}

.header-inner {
  max-width: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
