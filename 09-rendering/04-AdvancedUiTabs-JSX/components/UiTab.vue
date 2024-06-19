<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiTab',

  props: {
    name: String,
    title: String,
  },
});
</script>
