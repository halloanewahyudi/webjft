<template>
  <div>
    <Carousel
      v-bind="carouselConfig"
      ref="homeSlideshow"
      v-model:currentSlide="currentSlide"
       @init="handleInit"
  @slide-start="handleStart"
    >
      <Slide v-for="(slide, index) in slideshows" :key="index">
        <img :src="slide.image" alt="" class="w-full h-screen object-cover absolute top-0 left-0">
          <div class="container min-h-screen flex flex-col justify-center relative">
            <div class="slide-content max-w-[540px] flex flex-col gap-5">
            <div class="text-light"> 
            <h4 class="font-jft mb-3" v-if="slide.preTitle">{{ slide.preTitle }}</h4>
              <h1 class="text-3xl lg:text-7xl font-display text-primary uppercase">
                {{ slide.title }}
              </h1>
            </div>
              <p class="text-lg text-light">
                {{ slide.description }}
              </p>
                  <nuxt-link v-if="slide.button && slide.button.link "  :to="slide.button.link" class="btn">{{slide.button.text }}</nuxt-link>
            </div>
          </div>
      </Slide>

      <template #addons>
        <div class="container relative z-50 flex justify-between items-center ">
          <div class="max-w-[540px] w-full absolute  bottom-10 z-50 bg-light/60 hidden lg:block">
            <div
              class="h-0.5 bg-primary transition-all duration-300"
              :style="{ width: `${progress }%` }"
            ></div>
          </div>

          <div class="flex items-center absolute  bottom-6 right-10  lg:left-auto z-50 gap-4 text-primary">
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
  pagination: false,
  gap: 0,
  arrows: false,
  mouseWheel: true,
 // wrapAround: true,
  transition: 1500,
};

const homeSlideshow = ref<any>(null);
const currentSlide = ref(1);
const totalSlides = ref(0);
const slideIndex = ref(0);

const progress = computed(() => {
   slideIndex.value = currentSlide.value;
  return (currentSlide.value   / totalSlides.value  ) * 100;
});
const handleInit = () => {
  currentSlide.value = 1;
};

const handleStart = (data: any) => {
  console.log('SLIDE END EVENT:', data);
  currentSlide.value = data?.currentSlideIndex + 1;
  totalSlides.value = data?.slidesCount ;
  slideIndex.value = data?.slidingToIndex ;
};

const slideNext = () => {
  homeSlideshow.value?.next();
};

const slidePrev = () => {
  homeSlideshow.value?.prev();
};

onMounted(() => {
  homeSlideshow.value?.slideTo(0, true);
});

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
  opacity: 0;
}

.carousel__slide.carousel__slide--active .slide-content{
  transform: translateX(0); 
  transition: all 1s ease-in-out;
  transition-delay: 1s;
  opacity: 1;
}

.carousel__slide--next,
.carousel__slide--prev {
}
</style>
