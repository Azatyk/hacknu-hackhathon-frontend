<template>
  <div class="orientation-slide">
    <div class="orientation-slide__content">
      <img
        src="/assets/images/window-sitting.svg"
        alt="Illustration"
        class="orientation-slide__image"
      />
      <h1 class="orientation-slide__heading">Какая у тебя ориентация?</h1>
      <ion-radio-group
        v-model="orientationId"
        class="orientation-slide__radio"
        @ion-change="handleRadioChange"
      >
        <ion-item v-for="orientation in orientations" :key="orientation.id">
          <ion-label>{{ orientation.name }}</ion-label>
          <ion-radio :value="orientation.id"></ion-radio>
        </ion-item>
      </ion-radio-group>
    </div>
    <ion-button
      :disabled="!orientationId"
      expand="block"
      class="orientation-slide__bottom-button"
      @click="$emit('next')"
      >Дальше</ion-button
    >
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import {
  IonButton,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonButton,
    IonItem,
    IonLabel,
    IonRadio,
    IonRadioGroup,
  },
  props: {
    orientations: Array,
  },
  data: () => ({
    orientationId: 0,
  }),
  methods: {
    handleRadioChange(event) {
      const { value } = event.target;
      this.$emit("orientation-change", value);
    },
  },
});
</script>

<style scoped>
.orientation-slide {
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.orientation-slide__content {
  width: 90%;
  height: 70vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.orientation-slide__image {
  width: 80%;
  margin: 0 auto 30px;
}

.orientation-slide__heading {
  margin: 0;
  text-align: center;
}

.orientation-slide__radio {
  margin: 30px 0;
}

.orientation-slide__paragraph {
  margin: 0;
  text-align: center;
  font-size: 16px;
  line-height: 1.4;
}
</style>