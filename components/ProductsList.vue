<template>
   <div class="w-1050 my-0 mx-auto py-10 flex flex-col justify-center align-center">
    <ProductTitle :url="titleUrl">
      <template #title>{{ title }}</template>
      <template #subtitle>{{ subtitle }}</template>
    </ProductTitle>
    <SwiperSlide :products="products" />
  </div>
</template>

<script>
import axios from "axios"
import { ref } from "vue"
import ProductTitle from './ProductTitle.vue';
import SwiperSlide from './SwiperSlide.vue';

export default {
  components: {
    ProductTitle,
    SwiperSlide
},
  setup() {
    const products = ref([]);
    const titleUrl = ref('')
    const title = ref('')
    const subtitle =ref('')

    const getProducts = async () => {
      try {
        const res = await axios.get('/data/products.json')
        products.value = res.data.products
        titleUrl.value = "http://itempang.com"
        title.value = res.data.product_title
        subtitle.value = res.data.product_subtitle
      } catch (err) {
        console.log(err)
      }
    }

    getProducts();

    return {
      products,
      titleUrl,
      title,
      subtitle
    }
  }
}
</script>
