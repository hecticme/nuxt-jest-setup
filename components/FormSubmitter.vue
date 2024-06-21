<script setup lang="ts">
const username = ref('')

const hasSubmitted = ref(false)

function handleSubmit () {
  hasSubmitted.value = true
}
</script>

<template>
  <div class="form-container">
    <form
      class="form"
      name="username"
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="username"
        class="input-username"
        data-username
      >

      <input
        class="button-submit"
        role="button"
        type="submit"
      >
    </form>

    <p
      v-if="hasSubmitted"
      class="message"
    >
      Thank you for your submission, {{ username }}.
    </p>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.input-username {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem
}

.button-submit {
  border: 0;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
}

.message {
  color: green;
}
</style>
