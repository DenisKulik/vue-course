<template>
  <main class="mini-messenger">
    <ul ref="messages" class="messages">
      <li v-for="message in messages" :key="message.id" class="message">
        {{ message.text }}
      </li>
    </ul>
    <form @submit.prevent="handleSendSubmit">
      <div class="input-group">
        <input v-model="newMessage" type="text" class="form-control messenger__input" placeholder="New message" />
      </div>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

let lastId = 0;

export default defineComponent({
  name: 'MiniMessenger',

  data() {
    return {
      newMessage: '',
      messages: [
        { id: lastId++, text: 'First message' },
        { id: lastId++, text: 'Second message' },
        { id: lastId++, text: 'Third message' },
        { id: lastId++, text: 'Forth message' },
      ],
    };
  },

  methods: {
    handleSendSubmit(): void {
      this.send();
    },

    send(): void {
      this.messages.push({
        id: lastId++,
        text: this.newMessage,
      });
      this.newMessage = '';

      this.$nextTick(() => {
        const messages = this.$refs.messages as HTMLUListElement;
        messages.scrollTop = messages.scrollHeight;
      });
    },
  },
});
</script>

<style scoped>
.mini-messenger {
  border: 4px solid var(--blue-light);
  width: 250px;
  background-color: var(--white);
}

.messages {
  padding: 0 1rem;
  margin: 0;
  list-style: none;
  height: 300px;
  overflow: auto;
}

.message {
  background-color: var(--grey);
  margin: 1rem 0 1rem auto;
  padding: 0.5rem;
  width: 80%;
  word-break: break-all;
}

.messenger__input {
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-radius: 0;
}
</style>
