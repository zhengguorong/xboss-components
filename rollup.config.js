import esBuild from 'rollup-plugin-esbuild';
import vueJsx from 'rollup-plugin-vue-jsx-compat';

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
    esBuild({
      jsxFactory: 'vueJsxCompat',
      tsconfig: 'tsconfig.json'
    })
  ],
  external: ['vue']
};
