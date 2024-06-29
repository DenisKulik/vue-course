<template>
  <div class="sample container">
    <p>source = <input v-model="source.value" type="number" /></p>
    <p>Debounced source (wait=1000ms) = {{ debouncedSource.value }}</p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { debouncedRef } from './utils/debouncedRef';

export default defineComponent({
  name: 'App',

  created() {
    this.source = ref(0);
    this.debouncedSource = debouncedRef(this.source, 1000);
  },
});
</script>

<style></style>
