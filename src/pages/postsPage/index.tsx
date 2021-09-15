import React, { FunctionComponent } from 'react';
import { Descriptions, Radio, Button } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

class PostsPage extends React.Component {
  state = {};

  onChange = (e) => {
    console.log('size checked', e.target.value);
    this.setState({
      size: e.target.value,
    });
  };

  render() {
    console.log('props----------', this.props);
    return (
      <div>
        <h2>诗词:</h2>
        <Button type="primary">Create</Button>
        <br />
        <br />
        <Descriptions
          bordered
          title="Custom Size"
          extra={<Button type="primary">Edit</Button>}
        >
          <Descriptions.Item label="Config Info">1111111111</Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          title="Custom Size"
          extra={<Button type="primary">Edit</Button>}
        >
          <Descriptions.Item label="Config Info">22222222222</Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}
export default connect(({ postsListData, loading }) => ({
  postsListData,
  loading,
}))(PostsPage);
