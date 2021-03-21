<template>
  <div class="questions">
    <cedra-nav />
    <div v-if="!stepperVisible && !outroVisible" class="questions__content">
      <div>
        <img
          src="/assets/images/seats.svg"
          alt="Стулья"
          class="questions__image"
        />
        <h2 class="questions__heading">Вопросы, чтобы влюбить и влюбиться</h2>
        <p class="questions__paragraph">
          По очереди задавайте эти вопросы на первом свидании, чтобы
          ближе узнать друг друга. Вам точно будет о чем поговорить
        </p>
      </div>
      <ion-button
        @click="showStepper"
        expand="block"
        class="welcome-slide__bottom-button"
        >Начать</ion-button
      >
    </div>
    <cedra-questions-stepper
      @finish="handleFinish"
      v-else-if="stepperVisible"
    />
    <div v-if="outroVisible" class="questions__content">
      <div>
        <img
          src="/assets/images/seats.svg"
          alt="Стулья"
          class="questions__image"
        />
        <h2 class="questions__heading">
          Поздравляю, вы ответили на все вопросы!
        </h2>
        <p class="questions__paragraph">
          В качестве последнего шага, вы должны смотреть в глаза своему партнеру
          в течение четырех минут. В тишине. Это трудно, но вы узнаете многое
          друг о друге.
        </p>
      </div>
      <ion-button
        @click="reset"
        expand="block"
        class="welcome-slide__bottom-button"
        >Вернуться</ion-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton } from "@ionic/vue";
import CedraNav from "@/components/common/cedra-nav.component.vue";
import CedraQuestionsStepper from "@/components/questions/cedra-questions-stepper.component.vue";

export default defineComponent({
  components: {
    IonButton,
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
    },
    reset() {
      this.outroVisible = false;
      this.stepperVisible = false;
    },
  },
});
</script>

<style scoped >
.questions {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.questions__content {
  height: 80vh;
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.questions__image {
  width: 80%;
  display: block;
  margin: 0 auto 30px;
}

.questions__heading {
  margin: 0;
  text-align: center;
}

.questions__paragraph {
  text-align: center;
  font-size: 16px;
  line-height: 1.4;
}
</style>