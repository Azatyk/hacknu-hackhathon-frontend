<template>
  <div class="stepper">
    <ion-progress-bar :value="progressBarValue"></ion-progress-bar>
    <ion-slides ref="mySlides" :options="slideOpts" @ionSlideDidChange="slideChanged">
      <ion-slide :key="question.id" v-for="question in questions">
        <div  class="stepper__card card">
          <div class="card__question">{{ question.question }}</div>
        </div>
      </ion-slide>
    </ion-slides>
    <div class="stepper__buttons">
      <button @click="prevSlide()" :disabled="disablePrevBtn" :class="{stepper__button_disabled: disablePrevBtn}" class="stepper__button">
      <i class="bx bx-left-arrow-alt"></i>
        Назад
      </button>
      <button v-if="disableNextBtn" @click="finishQuestions()" class="stepper__button">
        Закончить
      </button>
      <button v-else @click="nextSlide()" :disabled="disableNextBtn"  :class="{stepper__button_disabled: disableNextBtn}" class="stepper__button">
        Далее
      <i class="bx bx-right-arrow-alt"></i>
      </button>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonSlides, IonSlide } from "@ionic/vue";
import Questions from "@/../public/assets/questions.ts";

export default defineComponent({
  components: { IonSlides, IonSlide },
  data: () => ({
    questions: Questions
  }),
  methods: {
    finishQuestions() {
      this.$emit('finish')
    }
  },
  setup() {
    const mySlides = ref<any>(null);
    const disablePrevBtn = ref<boolean>(true);
    const disableNextBtn = ref<boolean>(false);
    const progressBarValue = ref<number>(0);

    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };

    const nextSlide = async () => {
      const slider = await mySlides?.value?.$el.getSwiper();
      await slider.slideNext();
    }

    const prevSlide = async () => {
      const slider = await mySlides?.value?.$el.getSwiper();
      await slider.slidePrev();
    }

    const slideChanged = async () => {
      const slider = await mySlides?.value?.$el.getSwiper();
      const slideLength = slider.slides.length;
      const activeSlide = slider.activeIndex;

      disablePrevBtn.value = activeSlide === 0;
      disableNextBtn.value = activeSlide === slideLength - 1;
      progressBarValue.value = (activeSlide+1)/slideLength
    }

    return { slideOpts, mySlides, prevSlide, nextSlide, disablePrevBtn, disableNextBtn, slideChanged, progressBarValue };
  }
});
</script>

<style scoped>
.stepper {
  height: 100vh;
}

.stepper__buttons {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.stepper__button {
  background: white;
  color: #6C5CE7;
  font-size: 20px;
}

.stepper__button_disabled {
  color: rgba(108, 92, 231, 0.692);
}

.card {
  margin: 10vh auto 0 auto;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__question {
  font-size: 35px;
}
</style>
