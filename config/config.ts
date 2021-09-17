import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  routes: routes,
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
  // 配置开启布局插件
  // layout: {},
  //接入antd@4.0
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
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
  fastRefresh: {},
  dynamicImport: {},
});
