<template>
  <img class="icon" :alt="icon" :src="iconSrc" />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import type {PropType} from 'vue';
import AlertCircle from '@/assets/icons/icon-alert-circle.svg';
import CalSm from '@/assets/icons/icon-cal-sm.svg';
import CalLg from '@/assets/icons/icon-cal-lg.svg';
import Check from '@/assets/icons/icon-check.svg';
import CheckCircle from '@/assets/icons/icon-check-circle.svg';
import ChevronDown from '@/assets/icons/icon-chevron-down.svg';
import Clock from '@/assets/icons/icon-clock.svg';
import Coffee from '@/assets/icons/icon-coffee.svg';
import Key from '@/assets/icons/icon-key.svg';
import List from '@/assets/icons/icon-list.svg';
import Map from '@/assets/icons/icon-map.svg';
import PenTool from '@/assets/icons/icon-pen-tool.svg';
import PillActive from '@/assets/icons/icon-pill-active.svg';
import Search from '@/assets/icons/icon-search.svg';
import Trash from '@/assets/icons/icon-trash.svg';
import Tv from '@/assets/icons/icon-tv.svg';
import User from '@/assets/icons/icon-user.svg';

const icons = {
  'alert-circle': AlertCircle,
  'cal-sm': CalSm,
  'cal-lg': CalLg,
  check: Check,
  'check-circle': CheckCircle,
  'chevron-down': ChevronDown,
  clock: Clock,
  coffee: Coffee,
  key: Key,
  list: List,
  map: Map,
  'pen-tool': PenTool,
  'pill-active': PillActive,
  search: Search,
  trash: Trash,
  tv: Tv,
  user: User,
};

export default defineComponent({
  name: 'UiIcon',

  props: {
    icon: {
      type: String as PropType<keyof typeof icons>,
      required: true,
      validator: (name: string) => Object.keys(icons).includes(name),
    },
  },

  computed: {
    iconSrc(): string {
      return icons[this.icon] ?? '';
    },
  },
});
</script>

<style scoped>
.icon {
  display: block;
}
</style>
