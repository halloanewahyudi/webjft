<template>
  <div  >

    <navbar :class="route.path === '/about' ? 'absolute top-0 left-0 w-full z-50' : ''" />
      <slot />
  </div>
</template>

<script lang="ts" setup>

const route = useRoute();

</script>

<style scoped>

</style>
