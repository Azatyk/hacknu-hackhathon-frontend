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
        v-model="birthday"
        display-format="DD/MM/YYYY"
        placeholder="Выбери дату"
        class="age-slide__date-picker"
        @ion-change="handleDatePickerChange"
      />
      <p class="age-slide__paragraph">
        Для того, чтобы пользоваться Цедрой ты должен быть старше 18 лет
      </p>
    </div>
    <ion-button
      :disabled="!birthday"
      expand="block"
      class="age-slide__bottom-button"
      @click="$emit('next')"
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
  data: () => ({
    birthday: "",
  }),
  methods: {
    handleDatePickerChange(event) {
      const { value } = event.target;
      this.$emit("birthday-change", value);
    },
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
  width: 90%;
  height: 70vh;
  margin: auto;
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
  text-align: center;
}

.age-slide__date-picker {
  margin: 30px 0;
  padding: 12px 0;
  color: #fa5159;
  border: 1px #fa5159 dashed;
  border-radius: 10px;
}

.age-slide__paragraph {
  margin: 0;
  text-align: center;
  font-size: 16px;
  line-height: 1.4;
}
</style>