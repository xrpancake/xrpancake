import '@fontsource/poppins';
import '@styles/globals.css';
import 'react-popper-tooltip/dist/styles.css';
import 'react-tabs/style/react-tabs.css';
import 'react-modal-video/css/modal-video.min.css';

import { AppProps } from 'next/app';
import { FC } from 'react';
import withDarkMode, { MODE } from 'next-dark-mode';
import { FlagsProvider } from '@atlaskit/flag';

import { Web3Provider } from '@context/Web3Connect';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <FlagsProvider>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </FlagsProvider>
  );
};

export default withDarkMode(App, { defaultMode: MODE.DARK });
