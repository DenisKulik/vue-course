<template>
  <TheToaster ref="toaster" />
  <p>
    <button type="button" @click="handleSuccessClick">Add Success Message</button>
    <button type="button" @click="handleErrorClick">Add Error Message</button>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheToaster from './components/TheToaster.vue';
import type { ComponentPublicInstance } from 'vue';

type ToasterInstance = ComponentPublicInstance<{
  success: (message: string) => void;
  error: (message: string) => void;
}>;

export default defineComponent({
  name: 'App',

  components: { TheToaster },

  methods: {
    handleSuccessClick() {
      (this.$refs.toaster as ToasterInstance).success('Success ' + new Date().toLocaleTimeString());
    },

    handleErrorClick() {
      (this.$refs.toaster as ToasterInstance).error('Error ' + new Date().toLocaleTimeString());
    },
  },
});
</script>
