import DefaultTheme from 'vitepress/theme';
import xboss from '../../../dist/esm/index';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(xboss);
  }
};
