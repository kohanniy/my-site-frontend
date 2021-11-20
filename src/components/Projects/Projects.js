import React from 'react';
import clsx from 'clsx';
import { List, ListItem } from '@mui/material';
import useMatchesScreenSize from '../../hooks/useMatchesScreenSize';
import Project from '../Project/Project';
import styles from './Projects.module.css';

const Projects = ({ projects }) => {
  const { matchesSm } = useMatchesScreenSize();
  return (
    <List disablePadding className={clsx(styles.list, {
      [styles['list_oneColumn']]: matchesSm
    })}>
      {projects.map((project) => (
        <ListItem disablePadding key={project.id}>
          <Project project={project} />
        </ListItem>
      ))}
    </List>
  );
}

export default Projects;
