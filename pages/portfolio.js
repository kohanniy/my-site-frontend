import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import {
  Container,
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  Grid,
  Chip,
} from '@mui/material';
import Articles from '../src/components/Articles';
import Layout from '../src/components/Layout';
import Seo from '../src/components/Seo';
import Link from '../src/components/Link';
import { fetchAPI } from '../src/lib/api';
import { getStrapiMedia } from '../src/lib/media';
import styles from '../ListItem.module.css';
import {
  HeroAvatar,
  HeroColumn,
  HeroContent,
  HeroHeader,
  HeroContainer,
  HeroSection,
} from '../src/components/Hero/Hero';

const Portfolio = ({ portfolio }) => {
  console.log(portfolio);
  return (
    <>
      <Seo seo={portfolio.seo} />
      <Box component='main'>Портфолио</Box>
      {/* <div>
        <div>
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div> */}
    </>
  );
};

export async function getStaticProps() {
  const portfolio = await fetchAPI('/portfolio');

  return {
    props: { portfolio },
    revalidate: 1,
  };
}

export default Portfolio;
