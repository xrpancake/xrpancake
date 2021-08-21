import { FC } from 'react';

import Logo from '@components/Header/Logo';

import { Wrapper, Left, Right, Button } from './styles';
import ChevronRight from './ChevronRight';

const CTA: FC = () => (
  <Wrapper>
    <Left>
      <div>
        <Logo />
      </div>
    </Left>
    <Right>
      <span>Would you like to get involved with XRPP token?</span>
      <div>
        <Button
          href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x5760ed58d66ba764c4c3073fc58aa471ea442efc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy XRPP Token"
        >
          <span>
            Buy XRPP Token
            <ChevronRight />
          </span>
        </Button>
        <Button
          href="https://t.me/XRPPBSC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <span>
            Join our Telegram
            <ChevronRight />
          </span>
        </Button>
      </div>
    </Right>
  </Wrapper>
);

export default CTA;
