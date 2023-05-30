import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${lexend.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
