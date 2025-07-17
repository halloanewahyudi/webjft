<template>
  <div class="py-3 bg-dark  fixed w-full z-50 top-0 left-0 lg:absolute lg:bg-transparent">
    <div class="container">
    <nav class="flex justify-between gap-4">
    <nuxt-link to="/" class="text-2xl font-jft ">JFT</nuxt-link>
     
      <button @click="openMenu = !openMenu" class="text-3xl block lg:hidden"> <Icon name="fluent:list-rtl-20-filled" /> </button>
     
      <div :class="openMenu ? 'block' : 'hidden lg:block'" class="menu absolute top-[60px] lg:top-auto left-0 w-full p-4 lg:p-0 bg-dark lg:bg-transparent lg:static lg:w-max">
      <ul class="flex flex-col lg:flex-row lg:items-center gap-4">
          <li v-for="menu in menus" :key="menu">
        <nuxt-link :to="menu.link" class="hover:text-primary duration-300 block mb-2"> {{ menu.name }} </nuxt-link>
      </li>
      </ul>
      </div>

    </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
 const openMenu = ref(false);

const { menus } = useMenus();
</script>

<style>

</style>