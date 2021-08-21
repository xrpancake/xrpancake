import '@fontsource/poppins';
import '@styles/globals.css';
import 'react-popper-tooltip/dist/styles.css';
import 'react-tabs/style/react-tabs.css';
import 'react-modal-video/css/modal-video.min.css';

import { AppProps } from 'next/app';
import { FC } from 'react';
import withDarkMode, { MODE } from 'next-dark-mode';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withDarkMode(App, { defaultMode: MODE.DARK });
