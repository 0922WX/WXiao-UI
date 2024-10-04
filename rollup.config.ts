import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDeps from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { dts } from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts", // 入口文件
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      }, //cjs
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      }, //esm
    ],
    plugins: [
      peerDeps(), //解决对等依赖关系
      resolve(), // 解析node_modules中的模块
      postcss(),
      commonjs(), // 转换commonjs模块
      typescript(), // 编译typescript
      terser(), //压缩代码
    ],
    external: ["react"], // 排除react依赖
  },
  {
    input: "src/index.ts", // 类型入口文件
    output: [{ file: "dist/index.d.ts", format: "es" }], // 生成类型
    plugins: [dts()], // 编译类型文件
    external:[/\.css$/]
  },
];
