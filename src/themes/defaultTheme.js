import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const colors = {
  bodyBackground: '#d3d3d3',
};

export let defaultTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: colors.bodyBackground,
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
