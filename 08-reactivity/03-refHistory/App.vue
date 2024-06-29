<template>
  <div class="sample container">
    <p>source = <input v-model="source.value" type="number"/></p>
    <pre><code>history = {{ history.value }}</code></pre>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import type { Ref } from 'vue';
import { refHistory } from './utils/refHistory';

export default defineComponent({
  name: 'App',

  created() {
    this.source = ref(0);
    const { history } = refHistory(this.source);
    this.history = history;
  },
});
</script>

<style></style>
