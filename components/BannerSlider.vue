<script setup>
const props = defineProps({
  bannerData: {
    type: Array,
    required: true,
  },
  newBannerData: {
    type: Array,
    required: true,
  },
});
const currentSlide = ref(0);
const slideWidth = ref(0);
const autoPlayInterval = ref(null);
const transitionStyle = ref("");

const resizeHandler = () => {
  slideWidth.value = document.documentElement.clientWidth;
};

const slideStyle = computed(() => {
  return {
    // transform: `translateX(-${currentSlide.value * slideWidth.value}px)`,
    transform: `translateX(-${currentSlide.value * 100}%)`,
    transition: transitionStyle.value,
  };
});

const widthResizeStyle = computed(() => {
  return {
    width: `${slideWidth.value}px`,
    height: "370px",
  };
});

const lastSlide = computed(() => {
  return props.bannerData ? props.newBannerData.length - 1 : 0;
});

const preButton = () => {
  if (currentSlide.value > 0) {
    currentSlide.value = currentSlide.value - 1;
    transitionStyle.value = "transform 0.2s ease-in";
  } else if (currentSlide.value === 0) {
    currentSlide.value = lastSlide.value - 1;
    transitionStyle.value = "";
  }
};

const nextButton = () => {
  if (currentSlide.value < lastSlide.value) {
    currentSlide.value = currentSlide.value + 1;
    transitionStyle.value = "transform 0.2s ease-in";
  } else if (lastSlide.value) {
    currentSlide.value = 1;
    transitionStyle.value = "";
  }
};

const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(nextButton, 3000);
};

const stopAutoPlay = () => {
  clearInterval(autoPlayInterval.value);
};

onMounted(() => {
  slideWidth.value = document.documentElement.clientWidth;
  window.addEventListener("resize", resizeHandler);
  startAutoPlay();
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeHandler);
  stopAutoPlay();
});
</script>

<template>
  <div class="group relative w-full h-full mx-auto">
    <div class="flex overflow-hidden">
      <div
        class="flex-shrink-0 flex justify-center"
        v-for="banner in newBannerData"
        :key="banner.bannerNo"
        @mouseover="stopAutoPlay"
        @mouseleave="startAutoPlay"
        :style="slideStyle"
      >
        <div class="flex justify-center" :style="widthResizeStyle">
          <img
            :src="banner.imageUrl"
            class="max-w-full min-w-full object-cover"
          />
        </div>
      </div>
      <button
        class="absolute z-10 top-0 left-0 right-1/2 bottom-0 my-auto mr-590 ml-o rotate-180 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100"
        @click="preButton"
        @mouseover="stopAutoPlay"
        @mouseleave="startAutoPlay"
      >
        <img src="@/assets/images/banner-button.svg" />
      </button>
      <button
        class="absolute z-10 top-0 right-0 left-1/2 bottom-0 my-auto mr-0 ml-590 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100"
        @click="nextButton"
        @mouseover="stopAutoPlay"
        @mouseleave="startAutoPlay"
      >
        <img src="@/assets/images/banner-button.svg" />
      </button>
    </div>
    <div class="relative w-1050 mx-auto">
      <div
        class="absolute flex justify-center items-center z-10 bottom-5 right-[109px] w-14 h-6 text-white font-semibold leading-[23px] bg-opacityGray rounded-xl"
      >
        {{ currentSlide + 1 }} / {{ bannerData.length }}
      </div>
    </div>
  </div>
</template>
