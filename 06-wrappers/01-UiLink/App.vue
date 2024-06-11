<template>
  <div class="sample container">
    <p>
      <UiLink tag="router-link" to="/">tag="router-link" to="/"</UiLink>
    </p>
    <p>
      <UiLink :tag="RouterLink" :to="{ name: 'page-a' }">:tag="RouterLink" :to="{ name: 'page-a' }"</UiLink>
    </p>
    <p>
      <UiLink :to="{ name: 'page-b' }">RouterLink by default with :to="{ name: 'page-b' }</UiLink>
    </p>
    <p>
      <UiLink tag="a" href="https://learn.javascript.ru">tag="a" with href</UiLink>
    </p>
    <p>
      <UiLink tag="a" href="https://learn.javascript.ru" target="_blank">tag="a" with href and _blank</UiLink>
    </p>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import UiLink from './components/UiLink.vue';

export default defineComponent({
  name: 'App',

  components: { UiLink },

  computed: {
    RouterLink() {
      return RouterLink;
    },
  },
});
</script>

<style>
@import '@/assets/styles/_container.css';
</style>
