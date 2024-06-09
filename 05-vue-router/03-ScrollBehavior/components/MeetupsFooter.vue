<template>
  <footer class="footer">
    <UiContainer> &copy; 2020-{{ new Date().getFullYear() }} </UiContainer>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiContainer from './UiContainer.vue';

export default defineComponent({
  name: 'MeetupsFooter',
  components: { UiContainer },
});
</script>

<style scoped>
.footer {
  padding: 100px 0 60px;
  text-align: center;
}
</style>
