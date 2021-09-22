import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';

export default {
  // 入口文件
  input: 'src/index.ts',
  // 分别输出commonjs和ESModule
  output: [
    {
      dir: 'dist/cjs/index.js',
      format: 'cjs'
    },
    {
      dir: 'dist/esm/index.js',
      format: 'esm'
    }
  ],
  // 使用del插件删除dist目录下的文件
  plugins: [
    del({ targets: 'dist' }),
    // 使用typescript插件编译文件，tsconfig参数可省略，默认读取根目录tsconfig.json
    // useTsconfigDeclarationDir 表示读取tsconfig的declarationDir配置，如果是false会和js文件同一级目录输出
    typescript({ tsconfig: './tsconfig.json', useTsconfigDeclarationDir: true })
  ],
  external: ['vue']
};
