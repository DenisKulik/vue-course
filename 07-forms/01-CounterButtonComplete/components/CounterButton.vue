<template>
  <button @click="increment">{{ localCount }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  emits: ['update:count'],

  data: () => ({
    localCount: 0,
  }),

  mounted() {
    this.localCount = this.count;
  },

  methods: {
    increment(): void {
      this.localCount += 1;
    },
  },

  watch: {
    count: {
      handler() {
        this.localCount = this.count;
      },
      immediate: true,
    },

    localCount(newValue: number) {
      this.$emit('update:count', newValue);
    },
  },
});
</script>
