import { queryPostsList } from '@/services/api';

export default {
  namespace: 'postsModal',

  state: {
    postsListData: [],
    loading: false,
  },

  effects: {
    *fetchPostsData(_, { put, call }) {
      const rsp = yield call(queryPostsList);
      // const { error, data } = rsp;
      console.log('博客接口数据rsp--------', rsp);
      // if (error) {
      //   return;
      // }
      yield put({
        type: 'updatePostData',
        payload: rsp,
      });
    },
  },

  reducers: {
    updatePostData(state: any, { payload }) {
      return {
        ...state,
        postsListData: payload,
      };
    },
  },

  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'fetchPostsData',
      });
    },
  },
};
