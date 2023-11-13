<script setup>
const props = defineProps({
  bannerData: {
    type: Array,
    required: true,
  },
});
const currentSlide = ref(0);
const slideWidth = ref(0);

const resizeHandler = () => {
  slideWidth.value = document.documentElement.clientWidth;
};

const slideStyle = computed(() => {
  return {
    transform: `translateX(-${currentSlide.value * slideWidth.value}px)`,
    transition: "transform 0.2s ease-in",
  };
});

const widthResizeStyle = computed(() => {
  return {
    width: `${slideWidth.value}px`,
    height: "370px",
  };
});

const lastSlide = computed(() => {
  if (props.bannerData) {
    return props.bannerData.length - 1;
  }
  return 0;
});

const preButton = () => {
  if (currentSlide.value > 0) {
    currentSlide.value = currentSlide.value - 1;
  }
};

const nextButton = () => {
  if (currentSlide.value < lastSlide.value) {
    currentSlide.value = currentSlide.value + 1;
  } else {
    currentSlide.value = 0;
  }
};

onMounted(() => {
  slideWidth.value = document.documentElement.clientWidth;
  window.addEventListener("resize", resizeHandler);
});
</script>

<template>
  <div class="relative w-full h-full mx-auto">
    <div class="flex overflow-hidden">
      <div
        class="flex-shrink-0 flex justify-center"
        v-for="banner in bannerData"
        :key="banner.bannerNo"
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
        class="absolute z-10 top-0 left-0 right-1/2 bottom-0 my-auto mr-590 ml-o rotate-180"
        @click="preButton"
      >
        <img src="@/assets/images/banner-button.svg" />
      </button>
      <button
        class="absolute z-10 top-0 right-0 left-1/2 bottom-0 my-auto mr-0 ml-590"
        @click="nextButton"
      >
        <img src="@/assets/images/banner-button.svg" />
      </button>
    </div>
  </div>
</template>
