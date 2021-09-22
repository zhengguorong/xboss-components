import { App } from 'vue';
import tag from './Tag.vue';

export const Tag = {
  install: (app: App) => {
    app.component(tag.name, tag);
  }
};
export default tag;
