<template>
<div class="profile-image">
    <img src="#" alt="" class="profile-image__img">
</div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({

})
</script>

<style scoped>
.profile-image {
  width: 100%;
  text-align: center;
}

.profile-image__img {
  margin-top: 20px;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  border: #ccc 1px solid;
}
</style>