import { HOST_TEST } from '@/constants/global';
import request from '@/tools/request';

// const apiHost = `${window.location.protocol}//${
//   process.env.NODE_ENV === 'development' ? '10.1.100.210' : window.location.hostname
// }`;

// 请求博客列表
export async function queryPostsList(params: any) {
  return request({
    url: `${HOST_TEST}posts`,
    method: 'get',
    data: params,
  });
}
