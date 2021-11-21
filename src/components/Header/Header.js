import React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import { getStrapiMedia } from '../../lib/media';
import { blurDataURL } from '../../lib/constants';
import Link from '../Link';

const Header = ({
  content,
  addContent = null,
  direction = 'column',
  spacing = 1,
  avatarWidth = 190,
  avatarHeight = 225,
  navigation = null,
}) => {
  const { title, description, avatar } = content;

  return (
    <Stack
      direction={direction}
      spacing={spacing}
      component='header'
      sx={{
        pt: {
          xs: '20px',
          sm: '40px',
          md: '60px',
        },
      }}
    >
      {avatar && (
        <Box component='figure' sx={{ m: 0 }}>
          <Link noLinkStyle href='/'>
            <Image
              width={avatarWidth}
              height={avatarHeight}
              alt='фронтенд-разработчик Вячеслав Коханный'
              src={getStrapiMedia(avatar)}
              placeholder='blur'
              blurDataURL={blurDataURL}
            />
          </Link>
        </Box>
      )}
      <Box>
        <Typography variant='h1' component='h1'>
          {addContent ? `${title} (${addContent})` : title}
        </Typography>
        <Typography variant='subtitle1'>{description}</Typography>
      </Box>
      {navigation && navigation}
    </Stack>
  );
};

export default Header;
