<template>
  <div class="button-group" role="group">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'UiButtonGroup',

  props: {
    modelValue: {
      required: true,
    },
  },

  emits: ['update:modelValue'],

  provide() {
    return {
      buttonGroup: {
        activeValue: computed(() => this.modelValue),
        updateActiveValue: this.updateActiveValue,
      },
    };
  },

  methods: {
    updateActiveValue(value: string): void {
      this.$emit('update:modelValue', value);
    },
  },
});
</script>

<style scoped>
.button-group {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  white-space: nowrap;
}
</style>
