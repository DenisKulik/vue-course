<template>
  <div class="pagination-container">
    <slot v-for="item in paginatedItems" :key="item" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiPaginationView',

  props: {
    page: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    perPage: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    paginatedItems() {
      return this.items.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
  },
});
</script>

<style></style>
