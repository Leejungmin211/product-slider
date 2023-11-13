<script setup>
import axios from "axios";

const bannerData = ref([]);

const getData = async () => {
  try {
    const res = await axios.get("/data/banner.json");
    bannerData.value = res.data.banner;
  } catch (err) {
    console.log(err);
  }
};

getData();
</script>

<template>
  <div class="relative max-w-1900 h-370 mt-0 mx-auto">
    <BannerSlider :bannerData="bannerData" />
  </div>
</template>
