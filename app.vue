<template>
  <div>
  <Transition name="slide-up" >
    <div
      v-if="progress"
      ref="loaderRef"
      class="load-layer fixed top-0 left-0 w-full h-1  bg-light z-50 flex flex-col justify-center items-center duration-300 " :style="{ height: `${progress}%` }"
    >
      <span class="text-3xl font-jft text-load animate-bounce text-primary">JFT</span>

    </div>
</Transition>
    <NuxtLayout>
      <nuxt-page />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

import gsap from 'gsap'

 const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
    duration: 3000,
    throttle: 200,
    // This is how progress is calculated by default
    estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
  })

  onMounted(() => {
    gsap.to('.load-layer', {
      height: 0,
      duration: 1,
      onComplete: () => {
        isLoading.value = false
      }
    })  
  })

</script>
