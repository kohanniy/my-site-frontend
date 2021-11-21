import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { homePageSectionVariants } from '../../lib/motionVarinats';

const Paragraph = ({ node, ...props }) => (
  <Typography variant='body2' paragraph {...props} />
);

const AboutMe = ({ content }) => {
  const { title, description } = content;

  return (
    <Box
      initial='hidden'
      variants={homePageSectionVariants}
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      component={motion.section}
    >
      <Typography component='h2' variant='h2' mb={1}>
        {title}
      </Typography>
      <ReactMarkdown
        components={{
          p: Paragraph,
        }}
      >
        {description}
      </ReactMarkdown>
    </Box>
  );
};

export default AboutMe;
