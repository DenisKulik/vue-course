<template>
  <component :is="tag" class="link">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiLink',

  props: {
    tag: {
      type: String,
      default: 'router-link',
    },
  },
});
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
