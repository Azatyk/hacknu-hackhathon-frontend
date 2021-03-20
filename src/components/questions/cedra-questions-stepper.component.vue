<template>
  <div class="stepper">
    <ion-slides @ionSlideDidChange="('changed')" ref="stepper" :options="slideOpts">
      <ion-slide :key="question.id" v-for="question in questions">
        <div  class="stepper__card card">
          <div class="card__question">{{ question.question }}</div>
        </div>
      </ion-slide>
    </ion-slides>
    <div class="stepper__buttons">
      <button class="stepper__button">
      <i class="bx bx-left-arrow-alt"></i>
        Назад
      </button>
      <button @click="next()" class="stepper__button">
        Далее
      <i class="bx bx-right-arrow-alt"></i>
      </button>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { IonSlides, IonSlide } from "@ionic/vue";

export default defineComponent({
  components: { IonSlides, IonSlide },
  data: () => ({
    showStepper: false,
    activeStep: null,
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
    },
    ionSlideDidChange() {
      console.log('changed')
      this.activeStep = this.$el.getActiveIndex()
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

.stepper__buttons {
  position: absolute;
  bottom: 20%;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.card {
  margin: auto;
  width: 90vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__question {
  font-size: 35px;
}
</style>
