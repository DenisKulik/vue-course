<template>
  <component :is="tag" class="button" :class="[variantClass, { button_block: block }]" :type="type">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type BadgeType = 'primary' | 'success' | 'danger';

type BadgeClassesType = {
  primary: string;
  success: string;
};

const buttonClasses: BadgeClassesType = {
  primary: 'button_primary',
  secondary: 'button_secondary',
  danger: 'button_danger',
};

export default defineComponent({
  name: 'UiButton',

  props: {
    tag: {
      type: [String, Object, Function],
      default: 'button',
    },

    block: {
      type: Boolean,
      default: false,
    },

    variant: {
      type: String as () => BadgeType,
      default: 'secondary',
    },
  },

  computed: {
    variantClass() {
      return buttonClasses[this.variant];
    },

    type() {
      if (this.tag === 'button') {
        return this.$attrs.type ?? 'button';
      }
      return undefined;
    },
  },
});
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: initial;
  text-align: center;
  border: 4px solid transparent;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
}

.button.button_block {
  display: block;
  width: 100%;
}

.button_primary {
  background-color: var(--blue);
  border-color: var(--blue);
  color: var(--white);
}

.button_primary:hover {
  background-color: var(--blue-light);
  border-color: var(--blue-light);
}

.button_secondary {
  background-color: var(--white);
  border-color: var(--blue);
  color: var(--blue);
}

.button_secondary:hover {
  border-color: var(--blue-light);
}

.button_danger {
  background-color: var(--white);
  border-color: var(--red);
  color: var(--red);
}

.button_danger:hover {
  border-color: var(--red-light);
}
</style>
