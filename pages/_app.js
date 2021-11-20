import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { GlobalContext } from '../src/contexts/globalContext';
import createEmotionCache from '../src/createEmotionCache';
import DefaultThemeProvider from '../src/themes/defaultTheme';
import { getStrapiMedia } from '../src/lib/media';
import { fetchAPI } from '../src/lib/api';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../src/components/PageTransition/PageTransition';

const clientSideEmotionCache = createEmotionCache();

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 100,
  when: 'afterChildren',
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
  router,
}) {
  const { global, navigation, contacts } = pageProps;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel='shortcut icon' href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={{ global, navigation, contacts }}>
        <DefaultThemeProvider>
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </DefaultThemeProvider>
      </GlobalContext.Provider>
    </CacheProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const [global, navigation, contacts] = await Promise.all([
    fetchAPI('/global'),
    fetchAPI('/navigation'),
    fetchAPI('/contacts'),
  ]);

  return { ...appProps, pageProps: { global, navigation, contacts } };
};
