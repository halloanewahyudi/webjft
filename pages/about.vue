<template>
  <div class="">
    <div class="bg-[url('/img/law-1.jpg')] bg-no-repeat bg-bottom py-40">
      <div class="container flex flex-col justify-center h-full items-center">
        <h1 class="text-5xl lg:text-8xl font-bold font-display text-primary mb-3">
          About Us
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <section>
      <div class="container">
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 lg:divide-x divide-light/30 items-center"
        >
          <div class="flex flex-col justify-center items-center gap-3 p-6">
            <!--  item -->
            <Icon name="fluent:calendar-28-regular" class="text-3xl text-primary" />
            <Counter :to="30" :duration="1500" class="font-display" />

            <p class="text-sm">Years Of Experience</p>
          </div>

          <div class="flex flex-col justify-center items-center gap-3 p-6">
            <!--  item -->
            <Icon name="fluent:gavel-24-filled" class="text-3xl text-primary" />
            <div class="flex items-end gap-2">
              <Counter :to="98" :duration="1500" class="font-display" /><span
                class="text-xl"
                >%</span
              >
            </div>

            <p class="text-sm">Successful cases</p>
          </div>

          <div class="flex flex-col justify-center items-center gap-3 p-6">
            <!--  item -->
            <Icon name="fluent:shield-person-add-20-filled" class="text-3xl text-primary" />
            <Counter :to="1200" :duration="1500" class="font-display" />
            <p class="text-sm">Personal Injury Cases</p>
          </div>
        </div>
      </div>
    </section>

    <section class="my-20">
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
            <div
              v-for="service in services"
              class="flex flex-col gap-4 text-center p-4 border border-light/50 hover:border-primary/50 duration-300 h-full"
            >
              <Icon :name="service.icon" class="text-5xl text-primary mx-auto" />
              <p class="font-bold text-primary text-xl">{{ service.name }}</p>
              <p class="">{{ service.description }}</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>

    <section class="mb-20">
    <div class="container">
     <Cta />
    </div>
    </section>

    <section class="mb-20">
      <div class="container">
        <NewsLine />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css/core";

definePageMeta({
  // layout: "about",
});

const { services } = useServices();
const { milestone } = useMilestone();

const splideRef = ref();

const goPrev = () => {
  splideRef.value?.splide?.go("<");
};

const goNext = () => {
  splideRef.value?.splide?.go(">");
};
</script>

<style></style>
