<template>
  <div>
    <div
      class="bg-[url('/img/law-1.jpg')] bg-no-repeat bg-bottom min-h-[480px] pt-40 "
    >
      <div class="container flex flex-col justify-center h-full items-center">
        <h1 class="text-5xl lg:text-8xl font-bold font-display text-primary mb-3">
          News
        </h1>
      </div>
    </div>
    <section class="mb-20">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="news in news"
            class="p-4 border border-light/50 hover:border-primary/50 hover:bg-primary/10 duration-300 cursor-pointer group"
          >
            <div class="overflow-hidden w-full h-[220px] mb-3">
              <img
                :src="news._embedded['wp:featuredmedia'][0].source_url"
                alt=""
                class="w-full h-[220px] object-cover  group-hover:scale-110 duration-300 "
              />
            </div>
            <span class="text-xs mb-2  flex gap-2 items-center max-w-max"><Icon name="fluent:calendar-28-regular" class="text-base"/> {{ formatDate( news.date_gmt) }}</span>
            <h4 class="text-lg mb-3">{{ news.title.rendered }}</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { data: news } = await useLazyFetch(
  "https://kat.sementara.net/wp-json/wp/v2/posts? per_page=9 &_embed"
);

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("id-ID", options);
}
</script>

<style></style>
