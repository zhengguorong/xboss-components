import { ref } from 'vue';

export function useToggle(defaultValue = false) {
  const state = ref(defaultValue);
  const toggle = () => {
    state.value = !state.value;
  };

  return [state, toggle] as const;
}
