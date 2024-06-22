<template>
  <span class="badge" :class="badgeClass"><slot /></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type badgeClassesType = {
  primary: string;
  success: string;
};

const badgeClasses: badgeClassesType = {
  primary: 'badge_primary',
  success: 'badge_success',
};

export default defineComponent({
  name: 'UiBadge',

  props: {
    type: {
      type: String,
      required: false,
      validator: (value) => Object.keys(badgeClasses).includes(value),
    },
  },

  computed: {
    badgeClass() {
      return badgeClasses[this.type];
    },
  },
});
</script>

<style scoped>
.badge {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  display: flex;
  flex-direction: row;
  padding: 4px 12px;
}

.badge_primary {
  color: var(--blue);
  background-color: var(--blue-extra);
}

.badge_success {
  color: var(--green);
  background-color: var(--green-light);
}
</style>
