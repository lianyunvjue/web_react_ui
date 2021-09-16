import React from 'react';
import RightMenu from './RightMenu';
export default (props) => {
  return (
    <>
      <RightMenu />
      {props.children}
    </>
  );
};
