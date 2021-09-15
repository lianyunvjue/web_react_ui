import dva from 'dva';
import { browserHistory } from 'dva/router';
// import createLoading from 'dva-loading';
import { message } from 'antd';
//Initialize
const app = dva({
  // ...createLoading({
  //   effects: true,
  // }),
  history: browserHistory,
  onError(e) {
    message.error(e.message);
  },
});

//Model
app.model(require('./models/app'));

//Router
app.router(require('./router'));

//Start
app.start('#root');
