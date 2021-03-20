<template>
  <div>
    <cedra-nav />
    <div v-if="!stepperVisible" class="questions">
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
    <cedra-questions-stepper v-else />
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
    stepperVisible: false
  }),
  methods: {
    showStepper() {
      this.stepperVisible = true;
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
  font-size: 25px;
  font-weight: 700;
  text-align: center;
}

.questions__heading_color {
  color: #ff8430;
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
  background: #ff8430;
  margin: 20px auto 0 auto;
}
</style>