import { queryPostsList } from '@/services/api';

export default {
  namespace: 'postsModal',

  state: {
    postsListData: [],
  },

  effects: {
    *fetchData(_, { put, call, take }) {
      const rsp = yield call(queryPostsList);
      const { error, data } = rsp;
      console.log('博客接口数据rsp--------', rsp);
      if (error) {
        return;
      }
      yield put({
        type: 'updatePostData',
        payload: data,
      });
    },
  },

  reducers: {
    updatePostData(state: any, { payload }) {
      return {
        ...state,
        postsListData: payload.data,
      };
    },
  },

  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'fetchData',
      });
    },
  },
};
