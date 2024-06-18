<template>
  <div class="sample container">
    <p><code>vnode = [h('h1', 'Header'), h('div', 'Some Div')]</code></p>
    <hr />
    <v-node :vnode="vnodes" />
  </div>
</template>

<script lang="ts">
import { h, defineComponent } from 'vue';
import VNode from './components/VNode.vue';

export default defineComponent({
  name: 'App',

  components: { VNode },

  computed: {
    vnodes() {
      return [h('h1', 'Header'), h('div', 'Some Div')];
    },
  },
});
</script>

<style></style>
