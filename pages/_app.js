import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  const theme = {
    fonts: {
      sizes: {
        heading1: '58px',
        heading2: '44px',
        heading3: '32px',
        heading4: '21px',
        heading5: '18px',
      },

      weights: {
        bold: 700,
        medium: 500,
        thin: 300,
      },
    },
    colors: {
      primary: '#237FEB',
      black: '#060708',
      iconBackground: '',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
