<template>
  <div class="wrapper">
    <div class="sample container">
      <MiniMessenger />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MiniMessenger from './components/MiniMessenger';

export default defineComponent({
  name: 'App',
  components: { MiniMessenger },
});
</script>

<style></style>
