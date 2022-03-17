import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { IntlProvider } from '../locales/IntlContext';
import { SEO } from '../next-seo.config';
import { ErrorBoundary } from '../components/errorBoundary/ErrorBoundary';
import '../styles/global.scss';
import '../styles/prismTheme.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <IntlProvider>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </IntlProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
