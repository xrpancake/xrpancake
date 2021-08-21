import Essentials from '@components/Essentials';
import TokenomicsScreen from '@screens/Tokenomics';

const title = 'Tokenomics';
const description = 'Description';

const TokenomicsPage = () => (
  <Essentials title={title} description={description}>
    <TokenomicsScreen />
  </Essentials>
);

export default TokenomicsPage;
