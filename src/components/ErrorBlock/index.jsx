import React from 'react';

import styles from './ErrorBlock.module.scss';

const ErrorBlock = () => {
  return (
    <h1 className={styles.root}>
      <span>😕</span> <br />
      NOT Found
    </h1>
  );
};

export default ErrorBlock;
