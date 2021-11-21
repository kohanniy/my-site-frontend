import React from 'react';
import clsx from 'clsx';
import { List, ListItem } from '@mui/material';
import useMatchesScreenSize from '../../hooks/useMatchesScreenSize';
import Project from '../Project/Project';
import styles from './Projects.module.css';

const Projects = ({ projects }) => {
  const { matchesSm } = useMatchesScreenSize();
  return (
    <List
      disablePadding
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
        },
        columnGap: '10px',
        rowGap: '20px',
      }}
      // className={clsx(styles.list, {
      //   [styles['list_oneColumn']]: matchesSm,
      // })}
    >
      {projects.map((project) => (
        <ListItem disablePadding key={project.id}>
          <Project project={project} />
        </ListItem>
      ))}
    </List>
  );
};

export default Projects;
