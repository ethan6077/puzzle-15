import React from 'react';
import styles from './Error.module.css';

function Tile(props) {
  const { value } = props;
  return (
    <div className={styles.tile}>
      {value}
    </div>
  );
}
