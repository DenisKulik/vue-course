<template>
  <div id="app" class="sample container">
    <h1>Without uploader</h1>
    <UiImageUploader @select="handleSelect" @remove="handleRemove" />

    <h1>With uploader</h1>
    <UiImageUploader
      :uploader="uploadImage"
      @select="handleSelect"
      @upload="handleUpload"
      @error="handleError"
      @remove="handleRemove"
    />

    <h1>With error uploader</h1>
    <UiImageUploader
      :uploader="errorUploader"
      @select="handleSelect"
      @upload="handleUpload"
      @error="handleError"
      @remove="handleRemove"
    />

    <h1>With preview</h1>
    <UiImageUploader :preview="image" @select="handleSelect" @remove="handleRemove" />

    <h2>Log</h2>
    <div v-for="(message, index) in log" :key="index">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiImageUploader from './components/UiImageUploader.vue';
import { uploadImage } from './ImageService.js';

type UploadResponse = {
  id: string;
  name: string;
}

export default defineComponent({
  name: 'App',

  components: { UiImageUploader },

  data() {
    return {
      image: 'https://course-vue.javascript.ru/api/images/1',
      uploadImage,
      log: [] as string[],
      selectedImage: null as File | null,
    };
  },

  methods: {
    errorUploader(): Promise<void> {
      return new Promise((_, reject) => setTimeout(reject, 2000, new Error('Oops... Error.')));
    },

    handleUpload(response: UploadResponse) {
      this.log.push(`[UPLOAD]: Image Id = ${response.id}`);
    },

    handleSelect(file: UploadResponse) {
      this.log.push(`[SELECT]: ${file.name}`);
    },

    handleRemove() {
      this.log.push(`[REMOVED]`);
    },

    handleError(error: Error) {
      this.log.push(`[ERROR]: ${error.message}`);
    },
  },
});
</script>

<style>
@import '@/assets/styles/_container.css';
</style>
