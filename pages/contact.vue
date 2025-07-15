<template>
  <div>
      <div class="container min-h-[90vh] flex flex-col justify-center pt-20 bg-dark/80 lg:bg-transparent">
      <div class="max-w-[560px] flex flex-col gap-6">
      <div>
      <h1 class="text-3xl lg:text-5xl font-bold font-display">Get in <span class="text-primary">  Touch</span></h1>
      <p>Please fill out the form below to schedule a consultation.</p>
      </div>
      
       <contact-form />
      </div>
      
      </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
   layout: "jft"
})

</script>

<style>

</style>