import { defineComponent, h, ref } from 'vue';

const toggleButton = defineComponent({
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
  },
  // 定义渲染函数
  render() {
    // h函数用来创建VNode
    // return h('button', { onClick: this.toggle }, this.state);
    // JSX语法
    return <button onClick={this.toggle}>{this.state}</button>;
  }
});

export default toggleButton;
