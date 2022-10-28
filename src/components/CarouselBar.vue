<template>
  <div
    id="carrusel-pacheco"
    class="carousel carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="picture in pictures"
        :key="picture.item"
        type="button"
        data-bs-target="#carrusel-pacheco"
        :data-bs-slide-to="picture.item"
        :class="Number(picture.item) == 0 ? 'active' : ''"
        aria-current="true"
        :aria-label="slides(picture.item)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="picture in pictures"
        :key="picture.item"
        :class="
          Number(picture.item) == 0 ? 'carousel-item active' : 'carousel-item'
        "
        :data-bs-interval="Number(picture.item) == 0 ? '10000' : '2000'"
      >
        <img
          :src="getImgUrl(`${picture.image}.jpeg`)"
          class="d-block w-100"
          v-bind:alt="picture.image"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ picture.title }}</h5>
          <p>{{ picture.description }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carrusel-pacheco"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carrusel-pacheco"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "CarouselBar",
  data() {
    return {
      pictures: [
        {
          item: 0,
          image: "pic01",
          title: "Obras Civiles para la Industria",
          description: "Fabricación de Estructuras, Pavimentos",
        },
        {
          item: 1,
          image: "pic02",
          title: "Mantenimiento Industrial",
          description:
            "Ejecución de Mantenimiento sin Comprometer su Productividad",
        },
        {
          item: 2,
          image: "pic03",
          title: "Trabajos en Alturas",
          description: "Comprometidos con la Seguridad",
        },
        {
          item: 3,
          image: "pic04",
          title: "Especializados en Inocuidad",
          description: "Lo que nos Hace Aptos para la Industria de Alimentos",
        },
        {
          item: 4,
          image: "pic05",
          title: "Remodelación Comercial",
          description: "Ajustados a su Horario",
        },
        {
          item: 5,
          image: "pic06",
          title: "Mantenimiento y Construcción",
          description: "En el Hogar, el Comercio o la Industria",
        },
      ],
    };
  },
  methods: {
    slides(item) {
      const slide = Number(item) + 1;
      return String(`Slide ${slide}`);
    },
    getImgUrl(pic) {
      return require("../assets/home_pictures/" + pic);
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  height: 700px;
}
h1 {
  font-size: 40px;
}
p {
  font-size: 30px;
}
.carousel-caption {
  margin-bottom: 60px;
}
</style>
