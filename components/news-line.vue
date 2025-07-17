<template>
  <div>
     <ul class="flex flex-col divide-light/30 divide-y-[1px]">
     <li v-for="item in news" :key="item" class="py-2">
     <nuxt-link to="#" class="hover:text-primary duration-300  mb-2 text-2xl flex justify-between items-center group ">
      {{ item.title.rendered }}  
      <Icon name="fluent:arrow-right-12-regular" class="text-lg group-hover:translate-x-2 duration-300" />
      </nuxt-link>
     </li>
     </ul>
  </div>
</template>

<script lang="ts" setup>
  const { data: news } = await useLazyFetch(
  "https://kat.sementara.net/wp-json/wp/v2/posts? per_page=5"
);
</script>

<style>

</style>