<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :class="{ 'image-uploader__preview-loading': isLoading }"
      :style="{ '--bg-url': `url(${imageUrl})` }"
    >
      <span class="image-uploader__text">{{ textInfo }}</span>
      <input
        ref="input"
        type="file"
        accept="image/*"
        class="image-uploader__input"
        v-bind="$attrs"
        @change="handleSelect"
        @click="handleClick"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiImageUploader',

  emits: ['select', 'upload', 'error', 'remove'],

  inheritAttrs: false,

  props: {
    preview: String,
    uploader: Function,
  },

  data() {
    return {
      imageUrl: '' as string | undefined,
      isLoading: false as boolean,
    };
  },

  created() {
    if (this.preview) {
      this.imageUrl = this.preview;
    }
  },

  computed: {
    textInfo(): string {
      if (this.isLoading) return 'Загрузка...';
      return this.imageUrl ? 'Удалить изображение' : 'Загрузить изображение';
    },
  },

  methods: {
    async handleSelect(event: Event): Promise<void> {
      const input = event.target as HTMLInputElement;
      const file = input.files![0];
      this.$emit('select', file);

      if (this.uploader) {
        try {
          this.isLoading = true;
          const result = await this.uploader(file);
          this.$emit('upload', result);
          this.imageUrl = URL.createObjectURL(file);
        } catch (error) {
          const input = this.$refs.input as HTMLInputElement;
          input.value = '';
          this.$emit('error', error);
        } finally {
          this.isLoading = false;
        }
      } else {
        this.imageUrl = URL.createObjectURL(file);
      }
    },

    handleClick(event: Event): void {
      if (this.imageUrl) {
        event.preventDefault();
        this.handleRemove();
        return;
      }
    },

    handleRemove(): void {
      this.$emit('remove');
      const input = this.$refs.input as HTMLInputElement;
      input.value = '';
      this.imageUrl = '';
    },
  },

  watch: {
    preview() {
      this.imageUrl = this.preview;
    },
  },
});
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
