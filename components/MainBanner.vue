<script setup>
import axios from "axios";

const bannerData = ref([]);
const newBannerData = ref([]);

const getData = async () => {
  try {
    const res = await axios.get(" http://localhost:8888/data/banner.json");
    bannerData.value = res.data.banner;
    newBannerData.value = [
      ...res.data.banner.slice(-1),
      ...res.data.banner,
      ...res.data.banner.slice(0, 1),
    ];
  } catch (err) {
    console.log(err);
  }
};

getData();
</script>

<template>
  <div class="relative max-w-1900 h-370 mt-0 mx-auto">
    <BannerSlider :bannerData="bannerData" :newBannerData="newBannerData" />
  </div>
</template>
