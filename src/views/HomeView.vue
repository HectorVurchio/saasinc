<template>
  <div class="home">
    <CarouselBar class="carouselBar" />
    <InfoArea class="infoArea" />
    <FooterMain class="footerMain" />
  </div>
</template>

<script>
import CarouselBar from "@/components/CarouselBar.vue";
import InfoArea from "@/components/InfoArea.vue";
import FooterMain from "@/components/FooterMain.vue";
export default {
  name: "HomeView",
  components: {
    CarouselBar,
    InfoArea,
    FooterMain,
  },
};
</script>
<style scoped>
.home {
  width: 100%;
}
.carouselBar {
  width: 82%;
  margin: auto;
}
.infoArea {
  margin-top: 30px;
}
.footerMain {
  margin-top: 50px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
