<template>
  <div class="stepper">
    <ion-progress-bar :value="progressBarValue" />
    <div>
      <ion-slides
        ref="mySlides"
        :options="slideOpts"
        @ion-slide-did-change="slideChanged"
      >
        <ion-slide :key="question.id" v-for="question in questions">
          <div class="stepper__card card">
            <div class="card__question">{{ question.question }}</div>
          </div>
        </ion-slide>
      </ion-slides>
    </div>
    <div class="stepper__buttons">
      <button
        @click="prevSlide"
        :disabled="disablePrevBtn"
        :class="{ stepper__button_disabled: disablePrevBtn }"
        class="stepper__button"
      >
        <i class="bx bx-left-arrow-alt stepper__icon"></i>
        Назад
      </button>
      <button
        v-if="disableNextBtn"
        @click="finishQuestions"
        class="stepper__button"
      >
        Закончить
      </button>
      <button
        v-else
        @click="nextSlide"
        :disabled="disableNextBtn"
        :class="{ stepper__button_disabled: disableNextBtn }"
        class="stepper__button"
      >
        Далее
        <i class="bx bx-right-arrow-alt stepper__icon"></i>
      </button>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonSlides, IonSlide, IonProgressBar } from "@ionic/vue";
import Questions from "@/data/questions";
export default defineComponent({
  components: { IonSlides, IonSlide, IonProgressBar },
  data: () => ({
    questions: Questions,
  }),
  methods: {
    finishQuestions() {
      this.$emit("finish");
    },
  },
  setup() {
    const mySlides = ref<any>(null);
    const disablePrevBtn = ref<boolean>(true);
    const disableNextBtn = ref<boolean>(false);
    const progressBarValue = ref<number>(0);
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
    };
    const nextSlide = async () => {
      const slider = await mySlides?.value?.$el.getSwiper();
      await slider.slideNext();
    };
    const prevSlide = async () => {
      const slider = await mySlides?.value?.$el.getSwiper();
      await slider.slidePrev();
    };
    const slideChanged = async () => {
      const slider = await mySlides?.value?.$el.getSwiper();
      const slideLength = slider.slides.length;
      const activeSlide = slider.activeIndex;
      disablePrevBtn.value = activeSlide === 0;
      disableNextBtn.value = activeSlide === slideLength - 1;
      progressBarValue.value = (activeSlide + 1) / slideLength;
    };
    return {
      slideOpts,
      mySlides,
      prevSlide,
      nextSlide,
      disablePrevBtn,
      disableNextBtn,
      slideChanged,
      progressBarValue,
    };
  },
});
</script>

<style scoped>
.stepper {
  position: relative;
  height: 100vh;
}

.stepper__buttons {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.stepper__button {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c5ce7;
  font-size: 20px;
  background: white;
}

.stepper__icon {
  padding: 0 6px;
}

.stepper__button:focus {
  outline: none;
}

.stepper__button_disabled {
  color: rgba(108, 92, 231, 0.5);
}

.card {
  margin: 20vh auto 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__question {
  font-size: 28px;
}
</style>