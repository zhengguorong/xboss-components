<template>
  <div v-for="(item, index) in tags" :key="index" class="color">{{ item }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Tag',
  setup() {
    const tags = ref(['游戏', '娱乐', '学习']);
    return {
      tags
    };
  }
});
</script>

<style scoped lang="scss">
$myColor: #f90;
.color {
  color: $myColor;
}
</style>
