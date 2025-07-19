<template>
  <div class="">
    <section
      class="min-h-[580px] py-20 px-6 lg:px-10 bg-[url('/img/sl-3.jpg')] bg-no-repeat bg-cover bg-right flex flex-col justify-center text-light mb-20"
    >
      <!-- banner -->
      <div class="container">
        <div class="max-w-[680px]">
          <h1 class="text-5xl lg:text-8xl font-bold mb-3 font-display">About Us</h1>
          <p class="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero!
          </p>
        </div>
      </div>
    </section>
    <!-- end banner -->

    <section class="mb-20">
      <!-- counter -->
      <div class="container">
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 lg:divide-x divide-gray-300 items-center"
        >
          <div class="flex flex-col justify-center items-center gap-3 p-6">
            <!--  item -->
            <Icon name="fluent:calendar-28-regular" class="text-3xl text-primary" />
            <Counter :to="50" :duration="1500" class="font-display" />

            <p class="text-sm">Years Of Experience</p>
          </div>

          <div class="flex flex-col justify-center items-center gap-3 p-6">
            <!--  item -->
            <Icon name="fluent:gavel-24-filled" class="text-3xl text-primary" />
            <div class="flex items-end gap-2">
              <Counter :to="298" :duration="1500" class="font-display" />
            </div>

            <p class="text-sm">National  cases</p>
          </div>

          <div class="flex flex-col justify-center items-center gap-3 p-6">
            <!--  item -->
            <Icon
              name="fluent:shield-person-add-20-filled"
              class="text-3xl text-primary"
            />
            <Counter :to="78" :duration="1500" class="font-display" />
            <p class="text-sm">International  cases</p>
          </div>
        </div>
      </div>
    </section>
    <!-- end counter -->

    <section class="mb-20">
      <!-- jft -->
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div class="flex flex-col gap-4">
            <!-- kiri -->
            <h4 class="text-3xl lg:text-5xl font-bold">
              Lorem ipsum dolor sit amet consectetur.
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates porro
              eveniet sit praesentium nostrum enim, nisi ex molestiae a, aliquid alias.
              Nisi eaque eos, deleniti perferendis commodi odit aspernatur fugit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse laudantium
              cumque voluptatem, reiciendis accusamus perspiciatis voluptate possimus
              expedita quam praesentium blanditiis, debitis qui saepe repudiandae
              cupiditate sequi odit, similique dicta?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto enim fuga,
              dolor pariatur eaque aliquid doloribus facere eius sequi necessitatibus eos
              aliquam, repellat veniam vitae veritatis quod amet aspernatur possimus
              tempore. Pariatur accusamus ratione vel eaque. Autem sequi veritatis vel
              eaque vitae modi? Corporis facilis nesciunt eligendi nisi culpa dolorem unde
              eos officiis reiciendis sunt ea quidem autem laboriosam, nemo delectus
              cumque earum ad laborum esse quibusdam voluptatibus, fugiat fuga sed et!
              Magni sunt ullam, sit saepe, odio quo distinctio minima, laboriosam
              veritatis totam natus. Perspiciatis ipsa quibusdam quisquam aspernatur
              repellat! Dolore magnam, magni voluptatum sed libero et enim aliquam.
            </p>
          </div>
          <!-- end kiri -->
          <div class="flex flex-col justify-between items-center p-6">
            <!-- kanan -->

            <img
              src="/img/jft.png"
              alt=""
              class="shadow-2xl border-8 border-gray-300 bg-dark relative"
            />
          </div>
          <!-- endkanan -->
        </div>
      </div>
    </section>
    <!-- end jft -->

    <section class="mb-20">
      <!-- why choose us -->
      <div class="container">
        <div class="flex flex-col gap-4">
          <div class="max-w-screen-md mx-auto text-center mb-10 flex flex-col gap-4">
            <p class="font-jft">Why Choose Us ?</p>
            <h2 class="text-3xl lg:text-5xl font-bold">
              We Are Top Lawyers With 50 Years Of Experience
            </h2>
            <p>
              Decision Are A Professional Attorney & Lawyers Services Provider
              Institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- end why choose us -->

    <section class="mb-20">
      <!-- section services -->
      <div class="container">
        <div class="flex flex-col gap-4">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 items-center"
          >
            <div
              v-for="service in services"
              class="flex flex-col gap-4 text-center p-4 border border-gray-300 hover:border-primary/50 duration-300 h-full"
            >
              <Icon :name="service.icon" class="text-5xl text-primary mx-auto" />
              <p class="font-bold text-primary text-xl">{{ service.name }}</p>
              <p class="">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-20">
      <div class="container">
        <Cta />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  // layout: "about",
});

const { services } = useServices();
const { milestone } = useMilestone();
</script>

<style></style>
