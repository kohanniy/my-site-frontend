import React from 'react';
import { Divider } from '@mui/material';
import styles from './DotDivider.module.css';

const DotDivider = ({ className, ...props }) => (
  <Divider className={styles.divider} {...props} />
);

export default DotDivider;
