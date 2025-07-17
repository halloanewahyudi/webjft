<template>
  <div  >

    <Navbar />
      <slot />
      <Footer class="py-4 bg-dark text-light" />
  </div>
</template>

<script lang="ts" setup>

const route = useRoute();

</script>

<style scoped>

</style>
