import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置开启布局插件
  layout: {},
  //接入antd@4.0
  antd: {},
  // 使用 dva 数据流
  dva: {
    immer: true,
    hmr: false,
  },
  //使用代理跨域请求
  proxy: {
    '/api': {
      target: 'https://a.b.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
