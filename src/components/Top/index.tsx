import { FC } from 'react';

import useWeb3 from '@hooks/useWeb3';

import { Web3Button, Wrapper } from './styles';

const Top: FC = () => {
  const { onWeb3Click, account, isHolder } = useWeb3();
  return (
    <Wrapper>
      <Web3Button onClick={onWeb3Click}>
        {account ? account : 'Connect'}
      </Web3Button>
    </Wrapper>
  );
};

export default Top;
