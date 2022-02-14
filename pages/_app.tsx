import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
import { SEO } from '../next-seo.config';
import '../styles/global.scss';
import '../styles/prismTheme.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
