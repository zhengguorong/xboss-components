import { App } from 'vue';
import toggleButton from './ToggleButton.vue';

export const ToggleButton = {
  install: (app: App) => {
    app.component(toggleButton.name, toggleButton);
  }
};

export default toggleButton;
