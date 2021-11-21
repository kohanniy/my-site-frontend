import React from 'react';
import Header from '../src/components/Header/Header';
import { Container, Stack, Box, Button, CircularProgress } from '@mui/material';
import Seo from '../src/components/Seo';
import { fetchAPI } from '../src/lib/api';
import Nav from '../src/components/Nav/Nav';
import Projects from '../src/components/Projects/Projects';
import Footer from '../src/components/Footer/Footer';
import PageTransition from '../src/components/PageTransition/PageTransition';

const circularProgressStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: '-12px',
  marginLeft: '-12px',
};

const buttonContainerStyles = {
  m: 'auto',
  position: 'relative',
  display: 'block',
  alignSelf: 'center',
};

const numberOfAdded = 4;

const Portfolio = ({ portfolio, firstProjects, numberOfProjects }) => {
  const [projects, setProjects] = React.useState(firstProjects);
  const [hasMore, setHasMore] = React.useState(true);
  const [nextProjectsLoading, setNextProjectsLoading] = React.useState(false);

  const getMoreProjects = async () => {
    setNextProjectsLoading(true);
    try {
      const nextProjects = await fetchAPI(
        `/projects?_start=${projects.length}&_limit=${numberOfAdded}`
      );
      setProjects((projects) => [...projects, ...nextProjects]);
    } catch (err) {
      console.log(err);
    } finally {
      setNextProjectsLoading(false);
    }
  };

  React.useEffect(() => {
    setHasMore(numberOfProjects > projects.length ? true : false);
  }, [numberOfProjects, projects.length]);

  return (
    <Container component={PageTransition} maxWidth='lg'>
      <Seo seo={portfolio.seo} />
      <Stack spacing={3}>
        <Header
          content={portfolio.content}
          navigation={<Nav />}
          avatarHeight={150}
          avatarWidth={150}
          addContent={`пока ${numberOfProjects}`}
        />
        <Projects projects={projects} />
        {hasMore && (
          <Box sx={buttonContainerStyles}>
            <Button
              disabled={nextProjectsLoading}
              variant='contained'
              onClick={getMoreProjects}
            >
              Показать ещё
            </Button>
            {nextProjectsLoading && (
              <CircularProgress
                component='div'
                size={24}
                sx={circularProgressStyles}
              />
            )}
          </Box>
        )}
        <Footer />
      </Stack>
    </Container>
  );
};

export async function getStaticProps() {
  const [portfolio, firstProjects, numberOfProjects] = await Promise.all([
    fetchAPI('/portfolio'),
    fetchAPI('/projects?_limit=6'),
    fetchAPI('/projects/count'),
  ]);

  return {
    props: { portfolio, firstProjects, numberOfProjects },
    revalidate: 1,
  };
}

export default Portfolio;
