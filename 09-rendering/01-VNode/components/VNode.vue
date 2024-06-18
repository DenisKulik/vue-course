<script lang="ts">
import { isVNode, h, defineComponent } from 'vue';

export default defineComponent({
  name: 'VNode',

  props: {
    vnode: {
      type: [Object, Array],
      require: true,
      validator: (value) => (Array.isArray(value) ? value.every((item) => isVNode(item)) : isVNode(value)),
    },
  },

  render() {
    if (Array.isArray(this.vnode)) {
      return this.vnode.map((item) => h(item));
    }

    return h(this.vnode);
  },
});
</script>
