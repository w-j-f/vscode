// vite 运行在 node 环境中(commonJS)，而最终代码是运行在浏览器环境中的（ESmodule），所以在项目中使用的commonJS语法最终会转为 ESmodule 语法；
// exports require        |      export import {} from '';

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// node 内置插件
// const path = require('path');//路径处理
// vite 第三方插件；



// 名词介绍
// process 当前启动node服务的进程实例；
// process.env() node的环境变量
// __dirname 当前文件的绝对路径 __filename 当前文件的绝对路径+文件名

// https://vitejs.dev/config/
export default defineConfig((config) => {
  // 环境变量信息
  let { mode, command, ssrBuild } = config;
  console.log(__dirname, __filename)
  // 必须返回一个配置对象
  return {
    plugins: [vue()],
  }
})