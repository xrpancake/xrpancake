import Hero from '@components/Hero';
import { Web3Provider } from '@context/Web3Connect';

import { Wrapper } from './styles';

const DashboardScreen = () => (
  <Web3Provider>
    <Wrapper>
      <Hero>Dashboard</Hero>
    </Wrapper>
  </Web3Provider>
);

export default DashboardScreen;
