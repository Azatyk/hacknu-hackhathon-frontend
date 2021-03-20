<template>
  <div class="stepper">
    <button class="stepper__left-button">
      <i class="bx bx-left-arrow-alt"></i>
    </button>
    <ion-slides ref="stepper" pager="true" :options="slideOpts">
      <ion-slide :key="question.id" v-for="question in questions">
        <div  class="stepper__card card">
          <div class="card__question">{{ question.question }}</div>
        </div>
      </ion-slide>
    </ion-slides>
    <button class="stepper__right-button">
      <i class="bx bx-right-arrow-alt"></i>
    </button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { IonSlides, IonSlide } from "@ionic/vue";

export default defineComponent({
  components: { IonSlides, IonSlide },
  data: () => ({
    showStepper: false,
    questions: [
      {
        id: 1,
        question:
          "If you could invite anyone in the world to dinner, who would it be?"
      },
      {
        id: 2,
        question:
          "If you could invite anyone in the world to dinner, who would it be?"
      },
      {
        id: 3,
        question:
          "If you could invite anyone in the world to dinner, who would it be?"
      },
      {
        id: 4,
        question:
          "If you could invite anyone in the world to dinner, who would it be?"
      },
      {
        id: 5,
        question:
          "If you could invite anyone in the world to dinner, who would it be?"
      },
      {
        id: 6,
        question:
          "If you could invite anyone in the world to dinner, who would it be?"
      },
      {
        id: 7,
        question:
          "If you could invite anyone in the world to dinner, who would it be?"
      },
      {
        id: 8,
        question:
          "If you could invite anyone in the world to dinner, who would it be?"
      }
    ]
  }),
  methods: {
    next() {
      this.$el.slideNext();
    }
  },
  setup() {
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    return { slideOpts };
  }
});
</script>

<style scoped>
.stepper {
  height: 100vh;
  position: relative;
}

.stepper__right-button {
  text-align: right;
  color: #f48b29;
  font-size: 25px;
  height: 120px;
  width: 60px;
  background: #f48b2969;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  position: absolute;
  right: 0;
  bottom: 30%;
}

.card {
  width: 100vw;
  height: 100vh;
}

.stepper__left-button {
  text-align: left;
  color: #f48b29;
  font-size: 25px;
  height: 120px;
  width: 60px;
  background: #f48b2969;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  position: absolute;
  left: 0;
  bottom: 30%;
}
</style>
