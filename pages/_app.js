import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { GlobalContext } from '../src/contexts/globalContext';
import createEmotionCache from '../src/createEmotionCache';
import DefaultThemeProvider from '../src/themes/defaultTheme';
import { getStrapiMedia } from '../src/lib/media';
import { fetchAPI } from '../src/lib/api';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const { global } = pageProps;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel='shortcut icon' href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <DefaultThemeProvider>
          <Component {...pageProps} />
        </DefaultThemeProvider>
      </GlobalContext.Provider>
    </CacheProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI('/global');

  return { ...appProps, pageProps: { global } };
};
