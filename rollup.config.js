import esBuild from 'rollup-plugin-esbuild';
import vuePlugin from 'rollup-plugin-vue';
import vueJsx from 'rollup-plugin-vue-jsx-compat';
import postcss from 'rollup-plugin-postcss';

export default {
  // 入口文件
  input: 'src/index.ts',
  // 分别导出esm和umd
  output: [
    {
      dir: 'dist/esm',
      format: 'esm'
    },
    // umd格式放cdn提供给浏览器直接使用
    {
      dir: 'dist/umd',
      format: 'umd',
      name: 'xboss',
      globals: {
        vue: 'Vue'
      }
    }
  ],
  plugins: [
    vueJsx(),
    vuePlugin(),
    esBuild({
      jsxFactory: 'vueJsxCompat',
      tsconfig: 'tsconfig.json'
    }),
    postcss({
      extract: 'bundle.css'
    })
  ],
  // 声明vue为外部组件，不要打包到组件库
  external: ['vue']
};
