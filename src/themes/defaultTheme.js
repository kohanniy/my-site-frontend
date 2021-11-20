import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const colors = {
  bodyBackground: '#d3d3d3',
  black: '#000',
};

export let defaultTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: colors.bodyBackground,
          color: colors.black,
        },
        '#__next': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          '& header': {
            flexShrink: 0,
          },
          '& footer': {
            flexShrink: 0,
          },
          '& main': {
            flexGrow: 1,
            flexShrink: 0,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Play", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.25rem',
    },
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);

function DefaultThemeProvider({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default DefaultThemeProvider;
