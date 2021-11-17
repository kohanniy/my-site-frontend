import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const useMatchesScreenSize = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLg = useMediaQuery(theme.breakpoints.down('lg'));

  return {
    matchesSm,
    matchesMd,
    matchesLg,
  };
};

export default useMatchesScreenSize;
