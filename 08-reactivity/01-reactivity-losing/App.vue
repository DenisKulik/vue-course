<template>
  <UiContainer class="sample">
    <SensorsDataContainer />
  </UiContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiContainer from './components/UiContainer';
import SensorsDataContainer from './components/SensorsDataView';

export default defineComponent({
  name: 'App',

  components: { SensorsDataContainer, UiContainer },
});
</script>

<style></style>
