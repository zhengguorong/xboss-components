<template>
  <button class="color" @click="toggle">{{ state }}</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ToggleButton',
  setup() {
    const state = ref(false);
    const toggle = () => {
      state.value = !state.value;
    };
    return {
      state,
      toggle
    };
  }
});
</script>

<style scoped>
.color {
  color: blue;
}
</style>
