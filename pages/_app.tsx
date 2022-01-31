import '../styles/global.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Blog</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
