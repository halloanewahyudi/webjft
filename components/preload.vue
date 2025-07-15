<!-- components/Preloader.vue -->
<template>
  <transition name="slide-up">
    <div v-if="visible" class="fixed inset-0 bg-primary z-50 flex items-center justify-center">
      <p class="text-xl text-dark">Loading...</p>
    </div>
  </transition>
</template>

<script setup lang="ts">
const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, 1000) // durasi preload (1 detik)
})
</script>

