<template>
  <div>
    <i
      :class="star.style"
      v-for="star in stars"
      :key="star.id"
      @click="markStars(star.id)"
    ></i>
  </div>
</template>

<script>
export default {
  name: "InputEstrelas",
  props: {
    numberStar: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    stars: [],
    evaluation: 0,
  }),
  created() {
    this.initStar();
  },
  methods: {
    initStar() {
      for (let i = 0; i < this.numberStar; i++) {
        this.stars[i] = { id: i, style: "bi bi-star star" };
      }
    },
    markStars(e) {
      this.initStar();

      this.evaluation = e + 1;
      for (let i = 0; i < this.evaluation; i++) {
        this.stars[i].style = "bi-star-fill star full";
      }

      // this.$emit("avaliar", this.evaluation);
      this.$emit("update:avaliar", this.evaluation);
    },
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
.star {
  font-size: 1.5rem;
  color: #999;
  margin: 0 1px;
  cursor: pointer;
}

.full {
  color: #fc0;
}
</style>