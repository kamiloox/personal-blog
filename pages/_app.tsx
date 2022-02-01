import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
