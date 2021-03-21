<template>
  <div class="description-slide">
    <div class="description-slide__content">
      <img
        src="/assets/images/memories.svg"
        alt="Doodle Image"
        class="description-slide__image"
      />
      <h1 class="description-slide__heading">Пришло время рассказать о себе</h1>
      <p class="description-slide__paragraph">
        Напиши о себе забавный или интересный факт, какой твой любимый кофе или
        какую музыку ты слушаешь
      </p>
      <ion-textarea
        v-model="description"
        :maxlength="255"
        placeholder="У меня когда-то был хомячок"
        class="description-slide__textarea"
        @ion-change="handleTextChange"
      />
    </div>
    <ion-button
      :disabled="!description"
      expand="block"
      class="description-slide__bottom-button"
      @click="$emit('next')"
      >Дальше</ion-button
    >
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { IonButton, IonTextarea } from "@ionic/vue";

export default defineComponent({
  components: {
    IonButton,
    IonTextarea,
  },
  data: () => ({
    description: "",
  }),
  methods: {
    handleTextChange(event) {
      const { value } = event.target;
      this.$emit("description-change", value);
    },
  },
});
</script>

<style scoped>
.description-slide {
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.description-slide__content {
  width: 90%;
  height: 70vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.description-slide__image {
  width: 90%;
  margin: 0 auto 30px;
}

.description-slide__heading {
  margin: 0;
  text-align: center;
}

.description-slide__paragraph {
  margin: 8px 0 0;
  text-align: center;
  font-size: 16px;
  line-height: 1.4;
}

.description-slide__textarea {
  margin-top: 20px;
  text-align: left;
}
</style>