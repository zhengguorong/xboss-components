import { App } from 'vue';
import toggleButton from './toggle-button';

const install = (app: App) => {
  // 注册全局组件
  app.component('ToggleButton', toggleButton);
};

// 作为插件导出，暴露install方法
export default {
  install
};
