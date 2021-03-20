<template>
  <div class="choice">
    <h2 class="choice-title">{{ question }}</h2>
    <div class="choice-variants">
      <div
        class="choice-variant"
        v-for="(variant, index) in variants"
        :key="index"
      >
        <input
          class="choice-radio"
          v-if="type == 'radio'"
          type="radio"
          :name="question"
          :id="variant.name"
          :value="variant.name"
          v-model="radioValue"
        />
        <input
          class="choice-checkbox"
          v-else-if="type == 'checkbox'"
          type="checkbox"
          :id="variant.name"
          :value="variant.name"
          v-model="checkboxesValue"
        />
        <label
          class="choice-variant-label"
          :class="{
            'choice-label-active':
              type == 'radio'
                ? variant.name == radioValue
                : isCheckboxActive(variant.name),
          }"
          :for="variant.name"
          >{{ variant.name }}</label
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    question: String,
    type: {
      type: String,
      default: "radio",
    },
    variants: Array,
  },

  data() {
    return {
      radioValue: "",
      checkboxesValue: [],
    };
  },

  methods: {
    isCheckboxActive(labelName: string) {
      let isSelected = false;
      this.checkboxesValue.forEach((checkbox) => {
        if (checkbox == labelName) {
          isSelected = true;
        }
      });
      return isSelected;
    },
  },

  watch: {
    radioValue() {
      this.$emit("radio-change", this.radioValue);
    },

    checkboxesValue() {
      this.$emit("checkbox-change", this.checkboxesValue);
    },
  },
});
</script>

<style scoped>
.choice {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
}

.choice-title {
  margin: 0;
  margin-bottom: 10px;
  color: #3c3c3c;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.8;
}

.choice-variant {
  margin-bottom: 10px;
}

.choice-variant-label {
  margin-left: 10px;
  color: #3c3c3c;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
  transition: 200ms ease-in-out;
}

.choice-label-active {
  opacity: 1;
}
</style>