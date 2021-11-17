import React from 'react';
import { Divider } from '@mui/material';
import styles from './DotDivider.module.css';

function DotDivider({ className, ...props }) {
  return <Divider className={styles.divider} {...props} />;
}

export default DotDivider;
