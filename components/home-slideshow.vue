<template>
  <div>
    <Carousel
      v-bind="carouselConfig"
      ref="homeSlideshow"
      @init="handleInit"
      @slide-start="handleSlideStart"
    >
      <Slide v-for="slide in slideshows" :key="slide">
        <img :src="slide.image" alt="" class="w-full h-screen object-cover absolute top-0 left-0">
          <div class="container min-h-screen flex flex-col justify-center relative">
            <div class="slide-content max-w-[540px] flex flex-col gap-4">
              <h4 class="font-jft" v-if="slide.preTitle">{{ slide.preTitle }}</h4>
              <h1 class="text-3xl lg:text-5xl font-bold font-display text-primary">
                {{ slide.title }}
              </h1>
              <p class="text-lg">
                {{ slide.description }}
              </p>
             
                  <nuxt-link v-if="slide.button && slide.button.link "  :to="slide.button.link" class="btn">{{slide.button.text }}</nuxt-link>
             

            </div>
          </div>
      </Slide>

      <template #addons>
        <div class="container relative z-50 flex justify-between items-center ">
          <div class="max-w-[540px] w-full absolute  bottom-10 z-50 bg-secondary/40 hidden lg:block">
            <div
              class="h-0.5 bg-primary transition-all duration-300"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>

          <div class="flex items-center absolute  bottom-6 right-0 -left-1/2 translate-x-1/2 lg:left-auto z-50 gap-4 text-primary">
          <button class="text-lg" @click="slidePrev">
            Prev
          </button>
          <button class="text-lg" @click="slideNext">
            Next 
          </button>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
const { slideshows } = useHomeSlideshow();

const carouselConfig = {
  height: "100vh",
  width: "100%",
  pagination: false,
  gap:30,
  arrows: false,
  mouseWheel: true,
 // wrapAround: true,
  transition: 1500,
};

const homeSlideshow = ref(null);

const numberSlide = ref(6);
const slide = ref(null);

const progress = computed(() => {
    return (slide.value / numberSlide.value) * 100
 //  return (slide.value / numberSlide.value) * 100;
});

const handleInit = () => {
  console.log("Carousel initialized");
};
const handleSlideStart = (data) => {
  numberSlide.value = data.slidesCount;
  slide.value = data.currentSlideIndex + 1;
  console.log("Slide started:", data);
};

const slideNext = () => {
  homeSlideshow.value?.next();
}

const slidePrev = () => {
  homeSlideshow.value?.prev();
}
</script>

<style scoped>

.carousel{
  position: relative;
  width: 100%;
}
.carousel.carousel__slide{
  position: relative;
  width: 100%;
}


.carousel__slide--sliding img {
  left: 10%;
  transition: all 1s ease-in-out;
  transition-delay: .35s;
  width: 100%;
  right: 0;
}
.carousel__slide--visible img,
.carousel__slide.carousel__slide--active img{
  left: 0;
  transition: all 1s ease-in;
  width: 100%;
  right: 0;
}
.carousel__slide .slide-content{
  transform: translateX(-10%); 
  transition: all 1s ease-in-out;
  transition-delay: 1s;
}

.carousel__slide.carousel__slide--active .slide-content{
  transform: translateX(0); 
  transition: all 1s ease-in-out;
  transition-delay: 1s;
}

.carousel__slide--next,
.carousel__slide--prev {
}
</style>
