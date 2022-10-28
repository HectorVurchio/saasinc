<template>
  <div class="home">
    <CarouselBar />
  </div>
</template>

<script>
import CarouselBar from "@/components/CarouselBar.vue";

export default {
  name: "HomeView",
  components: {
    CarouselBar,
  },
};
</script>
<style scoped>
.home {
  width: 100%;
}
</style>
