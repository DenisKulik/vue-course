<template>
  <div class="toast" :class="`toast_${toast.type}`">
    <UiIcon class="toast__icon" :icon="toast.icon" />
    <span>{{ toast.message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import UiIcon from './UiIcon.vue';

type ToastType = 'success' | 'error';
type IconName = "cal-sm" | "cal-lg" | "tv" | "pill-active" | "alert-circle" | "check"
  | "clock" | "chevron-down" | "list" | "trash" | "pen-tool"

type Toast = {
  id: string;
  message: string;
  type: ToastType;
  icon: IconName;
};

export default defineComponent({
  name: 'UiToast',

  components: { UiIcon },

  props: {
    toast: {
      type: Object as PropType<Toast>,
      required: true,
    },
  },
});
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
