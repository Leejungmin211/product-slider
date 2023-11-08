<template>
  <div class="relative w-1050">
    <div class="overflow-hidden flex">
      <div :key="index" v-for="(product, index) in products" :style="slideStyle">
        <ProductCard :product="product" />
      </div>
      <div v-if="lastSlideConfirm"
        class="absolute top-0 right-0 w-249 h-320 flex justify-center items-center transition-all duration-200 ease-in">
        <div class="flex flex-col justify-center items-center opacity-0 -translate-x-2 animate-moveButtonAnimate">
          <button class="mb-4.5 placeholder">
            <img src="@/assets/images/violet-button.svg" alt="전체보기 버튼" />
          </button>
          <span>전체보기</span>
        </div>
      </div>
      <button class="absolute top-40 left-0 z-50 -translate-x-1/2 -translate-y-1/2" v-if="currentSlide !== 0"
        @click="preButton">
        <img src="@/assets/images/button.svg" alt="이전 버튼" />
      </button>
      <button v-if="!lastSlideConfirm" class="absolute top-40 right-0 z-50 translate-x-1/2 -translate-y-1/2 rotate-180"
        @click="nextButton">
        <img src="@/assets/images/button.svg" alt="다음 버튼" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue"
import ProductCard from "./ProductCard.vue"

export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    ProductCard
  },
  setup(props) {
    const currentSlide = ref(0)
    const itemsPerSlide = 4
    const slideWidth = ref(0)// px 단위로 설정
    const lastSlideConfirm = ref(false)
    const lastSlideWidth = 267

    const slideStyle = computed(() => {
      if (lastSlideConfirm.value) {
        return {
          transform: `translateX(-${currentSlide.value * slideWidth.value + lastSlideWidth}px)`,
          transition: "transform 0.2s ease-in"
        }
      } else {
        return {
          transform: `translateX(-${currentSlide.value * slideWidth.value}px)`,
          transition: "transform 0.2s ease-in"
        }
      }
    })

    const lastSlide = computed(() => {
      if (props.products) {
        return Math.ceil(props.products.length / itemsPerSlide) - 1;
      }
      return 0;
    })

    const preButton = () => {
      if (currentSlide.value > 0 && !lastSlideConfirm.value) {
        slideWidth.value = 1068
        currentSlide.value = currentSlide.value - 1
        lastSlideConfirm.value = false;
      } else if (lastSlideConfirm.value) {
        slideWidth.value = 1068
        currentSlide.value = currentSlide.value
        lastSlideConfirm.value = false;
      }
    }

    const nextButton = () => {
      if (currentSlide.value !== lastSlide.value) {
        slideWidth.value = 1068
        currentSlide.value = currentSlide.value + 1
        lastSlideConfirm.value = false
      } else {
        slideWidth.value = 1068
        currentSlide.value = currentSlide.value
        lastSlideConfirm.value = true
      }
    }

    return {
      currentSlide,
      slideStyle,
      lastSlide,
      preButton,
      nextButton,
      lastSlideConfirm,
    }
  }
}
</script>