<template>
  <header class="header">
    <div class="header-inner">
      <NuxtLink
        class="nav-link"
        to="/"
      >
        Home
      </NuxtLink>

      <NuxtLink
        class="nav-link"
        to="/playground"
      >
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
  gap: 0.75rem;
}

.nav-link {
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 250ms ease-in-out;
}

.nav-link:is(:focus-visible, :hover) {
  background-color: #f2f3f4;
}
</style>
