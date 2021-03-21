<template>
  <div class="gender-slide">
    <div class="gender-slide__content">
      <img
        src="/assets/images/pair.svg"
        alt="Illustration"
        class="gender-slide__image"
      />
      <h1 class="gender-slide__heading">Какой у тебя пол?</h1>
      <ion-radio-group
        v-model="genderId"
        @ion-change="handleRadioChange"
        class="gender-slide__radio"
      >
        <ion-item v-for="gender in genders" :key="gender.id">
          <ion-label>{{ gender.single }}</ion-label>
          <ion-radio :value="gender.id"></ion-radio>
        </ion-item>
      </ion-radio-group>
    </div>
    <ion-button
      :disabled="!genderId"
      expand="block"
      class="gender-slide__bottom-button"
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
    genders: Array,
  },
  data: () => ({
    genderId: 0,
  }),
  methods: {
    handleRadioChange(event) {
      const { value } = event.target;
      this.$emit("gender-change", value);
    },
  },
});
</script>

<style scoped>
.gender-slide {
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.gender-slide__content {
  width: 90%;
  height: 70vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gender-slide__image {
  width: 80%;
  margin: 0 auto 30px;
}

.gender-slide__heading {
  margin: 0;
  text-align: center;
}

.gender-slide__radio {
  margin: 30px 0;
}

.gender-slide__paragraph {
  margin: 0;
  text-align: center;
  font-size: 16px;
  line-height: 1.4;
}
</style>