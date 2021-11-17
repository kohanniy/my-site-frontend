import React from 'react';
import { Grid, Stack } from '@mui/material';
import Seo from '../src/components/Seo';
import { fetchAPI } from '../src/lib/api';
import Header from '../src/components/Header/Header';
import Nav from '../src/components/Nav/Nav';
import Skills from '../src/components/Skills/Skills';
import Footer from '../src/components/Footer/Footer';

const Home = ({ homepage, skillsData, basicSkillsData }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Grid item xs={11} sm={10} lg={8} m='0 auto' display='grid' rowGap={3}>
        <Header content={homepage.content} navigation={<Nav />} />
        <Stack component='main' spacing={3}>
          <Skills skills={skillsData.content} />
          <Skills basic skills={basicSkillsData.content} />
        </Stack>
        <Footer />
      </Grid>
    </>
  );
};

export async function getStaticProps() {
  const [homepage, skillsData, basicSkillsData] = await Promise.all([
    fetchAPI('/homepage'),
    fetchAPI('/skills'),
    fetchAPI('/basic-skills'),
  ]);

  return {
    props: { homepage, skillsData, basicSkillsData },
    revalidate: 1,
  };
}

export default Home;
