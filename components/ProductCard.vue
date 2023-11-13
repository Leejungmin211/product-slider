<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const formattedPrice = computed(() => {
  return props.product.product_price.toLocaleString();
});

const discountPrice = computed(() => {
  const discountedPrice = Math.floor(
    props.product.product_price *
      ((100 - props.product.product_discount) * 0.01)
  );
  return discountedPrice.toLocaleString();
});
</script>

<template>
  <div class="w-249 mr-18 text-base font-normal cursor-pointer">
    <div class="flex w-249 h-320 overflow-hidden border-gray-800">
      <img
        class="object-contain transition-all duration-500 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out rounded hover:scale-102"
        :src="product.url"
        alt="상품 이미지"
      />
    </div>
    <div
      class="h-9 flex justify-center items-center border border-dddGray mt-1.5 rounded"
    >
      <img
        src="@/assets/images/cart.svg"
        alt="주문담기 아이콘"
        class="pt-px pr-1"
      />
      <button class="-mb-1">담기</button>
    </div>
    <div class="pt-2 pr-2.5">
      <h3 class="line-clamp-2 m-0">{{ product.product_name }}</h3>
      <div>
        <span class="text-sm text-fontGray line-through">{{
          formattedPrice
        }}</span>
        <div>
          <span class="text-accentOrange font-extrabold mr-2">0%</span>
          <span>{{ discountPrice }}</span>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
