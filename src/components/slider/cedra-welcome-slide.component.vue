<template>
  <div class="welcome-slide">
    <div class="welcome-slide__content">
      <img
        src="/assets/slide1-image.svg"
        alt="Doodle Image"
        class="welcome-slide__image"
      />
      <h1 class="welcome-slide__heading">
        Привет, друг! Мы рады, что ты с нами
      </h1>
      <p class="welcome-slide__paragraph">
        Мы в Цедре хотим помочь тебе тебе найти человека с которым можно выпить
        стакан лимонада
      </p>
    </div>
    <ion-button
      @click="$emit('next')"
      expand="block"
      class="welcome-slide__bottom-button"
      >Дальше</ion-button
    >
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { IonButton } from "@ionic/vue";

export default defineComponent({
  components: {
    IonButton,
  },
});
</script>

<style scoped>
.welcome-slide {
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.welcome-slide__content {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.welcome-slide__image {
  width: 80%;
  margin: 0 auto;
}

.welcome-slide__heading {
  text-align: left;
}

.welcome-slide__paragraph {
  text-align: left;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  line-height: 1.4;
}
</style>