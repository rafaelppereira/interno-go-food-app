import { AppProps } from 'next/app';

import { Toaster } from 'react-hot-toast';
import { LoadingBar } from '../components/LoadingBar';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoadingBar />
      <Component {...pageProps} />
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
      <GlobalStyles />
    </>
  )
}

export default MyApp
