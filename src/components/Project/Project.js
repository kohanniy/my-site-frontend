import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Zoom,
  Box,
  List,
  ListItem,
  Grid,
  Paper,
} from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { getStrapiMedia } from '../../lib/media';
import { blurDataURL } from '../../lib/constants';
import styles from './Project.module.css';
import ProjectDialog from '../ProjectDialog/ProjectDialog';
import Link from '../Link';
import { motion } from 'framer-motion';
import { projectVariants } from '../../lib/motionVarinats';

const dialogStyle = {
  '& .MuiPaper-root': {
    maxHeight: '100%',
    color: 'common.black',
    width: {
      xs: 'calc(100% - 10px)',
    },
    m: {
      xs: '0 10px',
    },
  },
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const Paragraph = ({ node, ...props }) => (
  <Typography
    variant={node.tagName}
    component={node.tagName}
    gutterBottom={node.tagName === 'p' && node.children[0].tagName !== 'strong'}
    {...props}
  />
);

const ListComponent = ({ node, ordered = 'false', ...props }) => (
  <List sx={{ pt: 0 }} {...props} />
);

const ListItemComponent = ({ node, ordered = 'false', ...props }) => (
  <ListItem disableGutters className={styles.item} {...props} />
);

const LinkComponent = ({ node, ...props }) => (
  <Link target='_blanc' {...props} />
);

const PaperComponent = (props) => <Paper component='article' {...props} />;

const Project = ({ project }) => {
  const [isProjectOpen, setIsProjectOpen] = React.useState(false);

  const handleOpenProject = () => setIsProjectOpen(true);
  const handleCloseProject = () => setIsProjectOpen(false);

  return (
    <>
      <Card
        sx={{ height: '100%', width: '100%'}}
        // className={styles.card}
        component={motion.div}
        initial='offscreen'
        whileInView='onscreen'
        variants={projectVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <CardActionArea onClick={handleOpenProject}>
          <Box sx={{
            height: '300px',
            position: 'relative',
          }}>
            <Image
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              alt='обложка проекта'
              src={getStrapiMedia(project.image)}
              placeholder='blur'
              blurDataURL={blurDataURL}
            />
          </Box>
          <CardContent>
            <Typography variant='h2' component='h2'>
              {project.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ProjectDialog
        aria-describedby='описание проекта'
        transitionDuration={600}
        fullWidth
        open={isProjectOpen}
        onClose={handleCloseProject}
        TransitionComponent={Transition}
        title={project.title}
        scroll='paper'
        sx={dialogStyle}
        maxWidth='lg'
        PaperComponent={PaperComponent}
      >
        <Box component='figure' className={styles.figure}>
          <Image
            width={project.image.width}
            height={project.image.height}
            alt='обложка проекта'
            src={getStrapiMedia(project.image)}
            className={styles.image}
          />
        </Box>
        <Grid sx={{ m: '0 auto' }} item xs={12} sm={10} md={9}>
          <ReactMarkdown
            components={{
              p: Paragraph,
              h3: Paragraph,
              ul: ListComponent,
              li: ListItemComponent,
              a: LinkComponent,
            }}
          >
            {project.description}
          </ReactMarkdown>
        </Grid>
      </ProjectDialog>
    </>
  );
};

export default Project;
