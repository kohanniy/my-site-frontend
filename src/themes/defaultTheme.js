import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const colors = {
  bodyBackground: '#d3d3d3',
};

export const defaultTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: colors.bodyBackground,
        },
      },
    },
  },
  typography: {
    fontFamily: '"Play", "Roboto", "Arial", sans-serif',
  },
});

function DefaultThemeProvider({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </ThemeProvider>
  );
}

export default DefaultThemeProvider;
