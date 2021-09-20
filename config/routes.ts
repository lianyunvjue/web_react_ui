export default [
  {
    path: '/',
    name: '默认页',
    component: '@/pages/defaultPage/index',
  },
  {
    path: '/posts',
    name: '博客管理',
    // hideInMenu: false,
    component: '@/pages/postsPage/index',
  },
  // {
  //   path: '/user',
  //   component: '../layouts/UserLayout',
  //   routes: [
  //     { path: '/user', redirect: '/user/login' },
  //     { path: '/user/login', component: './User/Login' },
  //     { path: '/user/register', component: './User/Register' },
  //     { path: '/user/register-result', component: './User/RegisterResult' },
  //   ],
  // },
  // {
  //   component: '404',
  // },
];
