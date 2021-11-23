import React from 'react';
import Header from '../src/components/Header';
import { Container, Stack, Box, Button, CircularProgress } from '@mui/material';
import Seo from '../src/components/Seo';
import { fetchAPI } from '../src/lib/api';
import Nav from '../src/components/Nav';
import Projects from '../src/components/Projects';
import Footer from '../src/components/Footer';
import PageTransition from '../src/components/PageTransition';

const numberOfAdded = 4;

const containerStyles = {
  width: '100%',
  maxWidth: '1200px',
  m: '0 auto',
  pr: {
    xs: 2,
    md: 3,
  },
  pl: {
    xs: 2,
    md: 3,
  },
};

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
    <Stack sx={containerStyles} spacing={3} component={PageTransition}>
      <Seo seo={portfolio.seo} />
      <Header
        content={portfolio.content}
        navigation={<Nav />}
        avatarHeight={150}
        avatarWidth={150}
        addContent={`пока ${numberOfProjects}`}
      />
      <Box component='main'>
        <Stack component='section' spacing={2}>
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
        </Stack>
      </Box>
      <Footer />
    </Stack>
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
