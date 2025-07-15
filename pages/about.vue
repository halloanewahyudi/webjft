<template>
  <div>
  <div class="relative">
    <Splide :options="{ 
    type: 'loop',
    rewind: true, 
    autoplay: true, 
    speed:1500, 
    centerSlide: 'true',
    interval: 3000,
    arrows: false
     }" aria-label="My Favorite Images"
     class=" ">
    <SplideSlide v-for="slide in milestone"  class="">
    <div class="flex flex-col justify-end h-full min-h-screen w-full bg-top-center bg-cover" :style="{backgroundImage: `url(${slide.image})`}" >
    <div class="max-w-[440px] p-6 lg:p-10 text-center lg:text-left">
    <h4 class="text-3xl font-bold font-display text-primary">{{ slide.year }}</h4>
    <p class="text-sm lg:text-xl">{{ slide.title }}</p>
    </div>
    </div>
    </SplideSlide>
  </Splide>

  <div class="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 class="text-5xl lg:text-8xl font-bold font-display text-primary mb-3">
            About Us
          </h1>
          <p class="text-lg">Our team is ready to assist you</p>
        </div>
  </div>
 


 <section class="mb-20">
          <!-- section services -->
          <div class="container">
            <div class="flex flex-col gap-4">
              <div class="max-w-screen-md mx-auto text-center mb-10 flex flex-col gap-4">
                <p class="font-jft">Why Choose Us ?</p>
                <h2 class="text-3xl lg:text-5xl font-bold font-display text-primary">
                  We Are Top Lawyers With 30 Years Os Experience
                </h2>
                <p>
                  Decision Are A Professional Attorney & Lawyers Services Provider
                  Institutions.
                </p>
              </div>
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 items-center"
              >
                <div v-for="service in services" class="flex flex-col gap-4 text-center p-4 border border-light/50 hover:border-primary/50 duration-300 h-full">
                  <Icon :name="service.icon" class="text-5xl text-primary mx-auto" />
                  <p class="font-bold text-primary text-xl">{{ service.name }}</p>
                  <p class="">{{ service.description }}</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </section>

  </div>
</template>

<script lang="ts" setup>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

 definePageMeta({
  // layout: "about"
 })

 const { services } = useServices();
 const {milestone} = useMilestone();
</script>

<style >

</style>