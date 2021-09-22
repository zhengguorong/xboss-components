import { App } from 'vue';
import tag, { Tag } from './tag';
import toggleButton, { ToggleButton } from './toggle-button';

const components = [tag, toggleButton];
// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    // 因为导入的是组件，可以用app.component方法注册
    app.component(component.name, component);
  });
};

// 按需加载
export { Tag, ToggleButton };

export default {
  install
};
