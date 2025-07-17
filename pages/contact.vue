<template>
  <div>
    <div
      class="container min-h-[90vh] flex flex-col justify-center pt-20 bg-dark/80 lg:bg-transparent"
    >
      <div class="max-w-[560px] flex flex-col gap-6 mb-20">
        <div>
          <h1 class="text-3xl lg:text-5xl font-bold font-display mb-10">
            Get in <span class="text-primary">  Touch</span>
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 border-y border-light/50 py-6 mb-10">
            <div class="flex gap-2 ">
              <Icon name="fluent:phone-20-regular" class="text-5xl text-primary" />
              <p class="flex flex-col gap-0">
                <span class="font-bold text-primary"> Call Us </span>
                <span> <a href="tel:1234567890">123-456-7890</a></span>
              </p>
            </div>

            <div class="flex gap-2">
              <Icon name="fluent:mail-20-regular" class="text-5xl text-primary shrink-0" />
              <p class="flex flex-col gap-0">
                <span class="font-bold text-primary"> Email Us </span>
                <span> <a href="mailto:2f6eD@example.com">2f6eD@example.com</a></span>
              </p>
            </div>

          </div>
          <p>Please fill out the form below to schedule a consultation.</p>
        </div>

        <contact-form />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "jft",
});
</script>

<style></style>
