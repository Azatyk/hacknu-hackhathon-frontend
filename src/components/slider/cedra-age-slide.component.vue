<template>
  <div class="age-slide">
    <div class="age-slide__content">
      <img
        src="/assets/images/peer.svg"
        alt="Doodle Image"
        class="age-slide__image"
      />
      <h1 class="age-slide__heading">Для начала укажи свой возраст</h1>
      <ion-datetime
        display-format="DD/MM/YYYY"
        placeholder="Выбери дату"
        class="age-slide__date-picker"
      ></ion-datetime>
      <p class="age-slide__paragraph">
        Для того, чтобы пользоваться Цедрой ты должен быть старше 18 лет
      </p>
    </div>
    <ion-button
      @click="$emit('next')"
      expand="block"
      class="age-slide__bottom-button"
      >Дальше</ion-button
    >
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { IonDatetime, IonButton } from "@ionic/vue";

export default defineComponent({
  components: {
    IonDatetime,
    IonButton,
  },
});
</script>

<style scoped>
.age-slide {
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.age-slide__content {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.age-slide__image {
  width: 80%;
  margin: 0 auto 30px;
}

.age-slide__heading {
  margin: 0;
  text-align: left;
}

.age-slide__date-picker {
  margin: 30px 0;
  padding: 12px 0;
  color: white;
  background-color: #fa5159;
  border-radius: 10px;
}

.age-slide__paragraph {
  margin: 0;
  text-align: left;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  line-height: 1.4;
}
</style>