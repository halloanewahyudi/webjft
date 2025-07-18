<template>
   <Transition name="slide-up" >
    <div
      v-if="progress"
      ref="loaderRef"
      class="load-layer fixed top-0 left-0 w-full h-1  bg-light z-50 flex flex-col justify-center items-center duration-300 " :style="{ height: `${progress}%` }"
    >
      <span class="text-3xl font-jft text-load animate-bounce text-primary">JFT</span>

    </div>
</Transition>

  <div :class="['py-3 fixed w-full z-50 transition-all duration-300', isScrolled ? 'bg-white shadow-md' : 'bg-transparent']">
    <div class="container">
      <nav class="flex justify-between items-center gap-4 transition-colors duration-300 py-2" :class="isScrolled ? 'text-dark' : 'text-light'">
        <nuxt-link to="/" class="site-title font-jft  lg:w-auto ">
        <span class="lg:hidden"> JFT</span>
        <span class="hidden lg:inline">  Juan Felix Tampubolon & Partners </span>
         
        </nuxt-link>

        <div class="flex items-center gap-4 ">
          <span class="hidden lg:inline">Telp: +62 812 3456 789</span>

            <button @click="openMenu = !openMenu" class="text-2xl cursor-pointer hover:text-primary flex items-center gap-2">
            <span class="text-base"> Menu </span> 
              <Icon name="bi:list" />
            </button>
        </div>

        <Transition name="slide-right">
          <div
            v-if="openMenu"
            class="menu fixed top-0 right-0 w-full lg:w-1/4 h-screen p-6 lg:p-10 bg-light flex flex-col items-center justify-center"
          >
            <button
              class="text-2xl absolute top-5 right-5 z-50 cursor-pointer text-dark"
              @click="openMenu = !openMenu"
            >
              <Icon name="bi:x-lg" />
            </button>

            <ul class="flex flex-col gap-4 w-full">
              <li v-for="menu in menus" :key="menu">
                <nuxt-link
                  :to="menu.link"
                  class="hover:text-primary text-dark duration-300 block mb-2 text-2xl lg:text-3xl font-bold"
                >
                  {{ menu.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </Transition>
      </nav>
    </div>
  </div>
</template>


<script lang="ts" setup>
const openMenu = ref(false);
const { menus } = useMenus();

const scrollY = ref(0);
const isScrolled = computed(() => scrollY.value > 50);


 const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
    duration: 3000,
    throttle: 200,
    // This is how progress is calculated by default
    estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
  })


onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY;
  });

  

});

watchEffect(() => {
  if(progress.value == 100) {
   openMenu.value = false
  }
});

</script>

<style></style>
