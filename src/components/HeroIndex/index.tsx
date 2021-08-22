import { Button } from '@components/CTA/styles';
import ChevronRight from '@components/CTA/ChevronRight';

import { Container, Left, Right, Wrapper } from './styles';
import Video from './Video';

const HeroIndex: React.FC = () => (
  <Wrapper>
    <div>
      <div>
        <Container>
          <Left>
            <h1>Free XRP &amp; Cake when you hold</h1>
            <p>
              XRPancake <strong>$XRPP</strong> is an auto-yield token on BSC.
              Buy and automatically receive <strong>XRP</strong> and{' '}
              <strong>CAKE</strong> rewards every hour.
            </p>
            <Button
              className="hero"
              href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x5760ed58d66ba764c4c3073fc58aa471ea442efc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy XRPP Token"
              title="Buy XRPP Token"
            >
              <span>
                Buy XRPP Token
                <ChevronRight />
              </span>
            </Button>
          </Left>
          <Right>
            <Video />
          </Right>
        </Container>
      </div>
    </div>
  </Wrapper>
);

export default HeroIndex;
