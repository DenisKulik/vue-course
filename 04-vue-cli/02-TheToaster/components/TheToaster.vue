<template>
  <div class="toasts">
    <UiToast v-for="toast in toasts" :key="toast.id" :toast="toast" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import UiIcon from './UiIcon.vue';
import UiToast from './UiToast.vue';

type ToastType = 'success' | 'error';

type Toast = {
  id: string;
  message: string;
  type: ToastType;
  icon: string;
};

export default defineComponent({
  name: 'TheToaster',

  components: { UiIcon, UiToast },

  data: () => ({
    toasts: [] as Toast[],
    timeout: 5000,
  }),

  methods: {
    success(message: string) {
      this.addToast(message, 'success');
    },

    error(message: string) {
      this.addToast(message, 'error');
    },

    addToast(message: string, type: ToastType) {
      const id = uuidv4();
      const icon = this.getToastIcon(type);
      this.toasts.push({
        id,
        message,
        type,
        icon,
      });

      setTimeout(() => {
        this.removeToast(id);
      }, this.timeout);
    },

    removeToast(id: string) {
      this.toasts = this.toasts.filter((t) => t.id !== id);
    },

    getToastIcon(type: ToastType) {
      const iconsByType = {
        success: 'check-circle',
        error: 'alert-circle',
      };
      return iconsByType[type];
    },
  },
});
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
