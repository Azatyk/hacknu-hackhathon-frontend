<template>
  <div>
    <cedra-nav />
    <div v-if="!stepperVisible && !outroVisible" class="questions">
      <div class="questions__intro">
        <img src="/assets/loving-doodle.svg" alt="" class="questions__image">
      </div>
      <h2 class="questions__heading">Вопросы, чтобы <br/> <span class="questions__heading_color" >влюбиться</span></h2>
      <p class="questions__desc">Задайте эти вопросы друг другу и узнайте своего партнера ещё лучше</p>
      <button @click="showStepper" class="questions__button">
        Начать
        <i class='bx bx-right-arrow-alt'></i>
      </button>
    </div>
    <cedra-questions-stepper @finish="handleFinish" v-else-if="stepperVisible" />
    <div v-if="outroVisible" class="questions">
      <div class="questions__intro">
        <img src="/assets/loving-doodle.svg" alt="" class="questions__image">
      </div>
      <h2 class="questions__heading">Поздравляю, вы ответили на <br/> все  <span class="questions__heading_color" >вопросы</span>!</h2>
      <p class="questions__desc">Чтобы укрепить свою любовь, вы должны смотреть в глаза своему партнеру в течение четырех минут. В тишине. Это трудно, но вы узнаете многое друг о друге</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CedraNav from "@/components/common/cedra-nav.component.vue";
import CedraQuestionsStepper from "@/components/questions/cedra-questions-stepper.component.vue";

export default defineComponent({
  components: {
    "cedra-nav": CedraNav,
    "cedra-questions-stepper": CedraQuestionsStepper,
  },
  data: () => ({
    stepperVisible: false,
    outroVisible: false,
  }),
  methods: {
    showStepper() {
      this.stepperVisible = true;
    },
    handleFinish() {
      this.outroVisible = true;
      this.stepperVisible = false;
    }
  }
});
</script>

<style scoped >
.questions {
  display: flex;
  flex-direction: column;
}

.questions__image {
  margin-top: 20px;
}

.questions__heading {
  margin: 0 auto 20px auto;
  width: 90%;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
}

.questions__heading_color {
  color: #6C5CE7;
}

.questions__desc {
  margin: auto;
  width: 300px;
  text-align: center;
}

.questions__button {
  border-radius: 10px;
  color: white;
  height: 39px;
  font-size: 16px;
  width: 90%;
  background: #6C5CE7;
  margin: 20px auto 0 auto;
}
</style>