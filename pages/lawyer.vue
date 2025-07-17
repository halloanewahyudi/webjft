<template>
  <div>
    <div class="bg-[url('/img/lawyer.jpg')] bg-no-repeat bg-top">
      <div class="container pt-40">
        <div class="text-center">
          <h1 class="text-5xl lg:text-8xl font-bold font-display text-primary mb-3">
            Lawyer
          </h1>
          <p class="text-lg">Our team is ready to assist you</p>
        </div>

        <section class="max-w-screen-md mx-auto mt-52 mb-20">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 lg:gap-10 justify-center items-center"
          >
            <div v-for="(lawyer, index) in lawyers" :key="lawyer.name">
              <div
                @click="selectedLawyer(index)"
                class="text-center p-4 border border-light/50 hover:border-primary/50 duration-300 hover:bg-primary/10 cursor-pointer"
              >
                <div
                  class="max-w-[200px] mx-auto bg-primary relative hover:shadow-2xl shadow-light/25 duration-300 overflow-hidden"
                >
                  <img
                    :src="lawyer.image"
                    alt=""
                    class="w-full max-w-[200px] mx-auto group-hover:scale-110 duration-300"
                  />
                </div>
                <h4>{{ lawyer.name }}</h4>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-20">
          <div class="container">
            <Cta />
          </div>
        </section>

        <section class="mb-20">
          <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div class="flex flex-col gap-4"> <!-- kiri -->
                <h2 class="text-3xl font-bold font-display text-primary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, autem?
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cumque
                  laborum doloremque cupiditate voluptas? Consequuntur quis quasi
                  molestias dolore.
                </p>
              </div>
                <div> <!-- kanan --> 
                  <img src="/img/slide-2.jpg" alt="">
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <transition name="slide">
      <div
        v-if="selectLawyer"
        class="fixed top-0 left-0 w-full lg:w-3/4 h-full bg-light/95 text-dark flex flex-col items-center justify-center z-50"
      >
        <button
          class="text-3xl absolute top-5 right-5 text-light bg-dark p-2 leading-0 cursor-pointer"
          @click="selectedLawyer(null)"
        >
          <Icon name="mdi:window-close" />
        </button>

        <div class="p-6 lg:p-10 overflow-y-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
              :src="selectLawyer.image"
              :alt="selectLawyer.name"
              class="w-[200px] shadow-lg border-4 border-white object-cover md:col-span-1"
            />

            <div class="w-full md:col-span-2 lg:col-span-3">
              <h1 class="text-3xl font-bold font-display text-dark mb-3">
                {{ selectLawyer.name }}
              </h1>
              <div class="flex flex-col gap-3" v-html="selectLawyer.description"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({});

const { lawyers } = useLawyer();

const selectLawyer = ref(null);
const selectedLawyer = (index) => {
  selectLawyer.value = lawyers.value[index];
  console.log(selectLawyer.value);
};
</script>

<style></style>
