<template>
  <UiInput :model-value="value" :type="type" :step="step" @input="handleInput">
    <template v-for="slotName in Object.keys($slots)" #[slotName]>
      <slot :name="slotName" />
    </template>
  </UiInput>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiInput from './UiInput.vue';

export default defineComponent({
  name: 'UiInputDate',

  components: { UiInput },

  emits: ['update:modelValue'],

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'date',
      validator: (type: string) => ['date', 'time', 'datetime-local'].includes(type),
    },

    step: {
      type: Number,
    },
  },

  computed: {
    value() {
      if (!this.modelValue) return null;

      const date = new Date(this.modelValue);
      let hours;
      let minutes;

      switch (this.type) {
        case 'date':
          return date.toISOString().slice(0, 10);
        case 'datetime-local':
          return date.toISOString().slice(0, 16);
        case 'time':
          hours = String(date.getUTCHours()).padStart(2, '0');
          minutes = String(date.getUTCMinutes()).padStart(2, '0');
          if (this.step && Number(this.step) % 60 !== 0) {
            const seconds = String(date.getUTCSeconds()).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
          } else {
            return `${hours}:${minutes}`;
          }
        default:
          return null;
      }
    },
  },

  methods: {
    handleInput(event: Event) {
      const value = (event.target as HTMLInputElement).valueAsNumber;
      this.$emit('update:modelValue', value || null);
    },
  },
});
</script>
