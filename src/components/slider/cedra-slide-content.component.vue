<template>
  <div class="slide-content">
    <i class="bx bx-x slide-close" @click="$emit('close-slider')"></i>
    <img :src="img" class="slide-image" />
    <div class="slide-text">
      <h1 class="slide-title">{{ title }}</h1>
      <p class="slide-description">{{ description }}</p>
    </div>
    <div class="slide-button">
      <next-link
        @click="!needButtonArrow ? $emit('close-slider') : $emit('next-click')"
      >
        <div class="slide-link">
          <span class="slide-link-label">{{ buttonLabel }}</span
          ><i
            v-if="needButtonArrow"
            class="bx bx-right-arrow-alt slide-link-icon"
          ></i>
        </div>
      </next-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "slideContent",
  props: {
    title: String,
    description: String,
    onClick: Function,
    img: String,
    buttonLabel: String,
    needButtonArrow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.slide-content {
  position: relative;
  padding: 0 30px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slide-close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #3c3c3c;
  font-size: 30px;
  opacity: 0.6;
}

.slide-image {
  margin-bottom: 30px;
  height: 240px;
  max-height: 240px;
}

.slide-text {
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.slide-title {
  margin: 0;
  margin-bottom: 15px;
  color: #3c3c3c;
  font-size: 26px;
  font-weight: bold;
}

.slide-description {
  margin: 0;
  color: #3c3c3c;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  opacity: 0.8;
}

.slide-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #6c5ce7;
}

.slide-link-label {
  margin-right: 10px;
  font-size: 18px;
  font-weight: 600;
}

.slide-link-icon {
  margin: 0;
  font-size: 20px;
}
</style>
