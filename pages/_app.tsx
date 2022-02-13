import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
import '../styles/global.scss';
import '../styles/prismTheme.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
