import React from 'react';
import {
  Box,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import useMatchesScreenSize from '../../hooks/useMatchesScreenSize';

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemVariants = {
  visible: (i) => ({
    transform: 'scale(1, 1)',
    transition: {
      delay: i * 0.2,
      type: 'spring',
    },
  }),
  hidden: {
    transform: 'scale(0, 0)',
  },
};

const Skills = ({ skills, basic = false }) => {
  const { title, body } = skills;

  const { matchesSm } = useMatchesScreenSize();

  return (
    <Box
      initial='hidden'
      variants={listVariants}
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      component={motion.section}
    >
      <Typography component='h2' variant='h2' mb={1}>
        {title}
      </Typography>
      <Stack
        className={styles.list}
        component='ul'
        direction='row'
        flexWrap='wrap'
        gap={matchesSm ? 1 : 2}
      >
        {body.map((skill) => (
          <Chip
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            custom={Math.floor(Math.random() * body.length)}
            variants={itemVariants}
            key={skill.id}
            color={basic ? 'default' : 'primary'}
            component={motion.li}
            variant='outlined'
            label={skill.name}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;
