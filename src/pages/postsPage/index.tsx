import React, { FunctionComponent } from 'react';
import { connect } from 'dva';
import styles from './index.less';

// const PostsPage: <FunctionComponent>() => {
//   return (
//     <>
//       <h1>Posts</h1>
//     </>
//   )
// };
export default function IndexPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Posts</h1>
    </div>
  );
}

// export default connect(
//   ({ postsList  }) => ({ postsList  })
// )( PostsPage);
