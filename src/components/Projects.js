import { List, ListItem } from '@mui/material';
import Project from './Project';

const Projects = ({ projects }) => {
  return (
    <List disablePadding sx={listStyles}>
      {projects.map((project) => (
        <ListItem disablePadding key={project.id}>
          <Project project={project} />
        </ListItem>
      ))}
    </List>
  );
};

export default Projects;

const listStyles = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
  },
  columnGap: '10px',
  rowGap: '20px',
}
