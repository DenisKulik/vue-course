<template>
  <div>
    PageLogin - только для гостей.
    <template v-if="$route.query.from">query.from === {{ $route.query.from }}</template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageLogin',
});
</script>

<style scoped></style>
