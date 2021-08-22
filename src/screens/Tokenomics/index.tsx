import HeroIndex from '@components/HeroIndex';
import Section from '@components/Section';

import { Wrapper } from './styles';

const sections = [
  {
    id: 1,
    title: (
      <h1>
        Trust, honesty, transparency, and accountability are the building blocks
        we stand upon at XRPP.
      </h1>
    ),
    text: (
      <span>
        <p>
          Like us, you are likely sick of the constant rug pulls and honeypots,
          having been burnt by trusting the wrong people. At XRPP, we are tired
          of what we have seen and realized that maybe we could be a force for
          change.
        </p>
        <p>
          Let us come together, inspiring continuous action for future
          generations of tokens and setting a new standard for what a community
          expects from its team.
        </p>
      </span>
    ),
    color: `--color-section-one`,
    image: `/768.png`,
    anchor: {
      text: 'Read whitepaper',
      href: 'https://www.xrpancake.com/whitepaper.pdf',
    },
  },
  {
    id: 2,
    title: (
      <h1>
        State-of-the-art distribution gives <strong>XRP</strong> and{' '}
        <strong>CAKE</strong> rewards to hodlers.
      </h1>
    ),
    text: (
      <span>
        <p>
          A frictionless, yield-generating contract allows the community of
          hodlers to earn from each transaction whilst refinancing the LP pool
          and marketing wallet.
        </p>
        <p>
          Remaining virtually rug-proof, anti-whale, and anti-pump, thanks to
          our max hold and penalty taxes.
        </p>
      </span>
    ),
    image: `/768.png`,
    color: `--color-section-two`,
    anchor: {
      text: 'View our contract',
      href:
        'https://bscscan.com/token/0x5760ed58d66ba764c4c3073fc58aa471ea442efc',
    },
    inverted: true,
  },
  {
    id: 3,
    title: (
      <h1>Buy with confidence. The XRPP teams commitment to our holders.</h1>
    ),
    text: (
      <span>
        <p>
          Earning the trust of our holders will always be the highest priority,
          and we promise to redefine what a community expects from its team.
        </p>
        <p>
          To return your trust with transparency, and endeavour to answer any
          question or concern you may have across all aspects of our XRPP token.
        </p>
      </span>
    ),
    image: `/768.png`,
    color: `--color-section-three`,
    anchor: {
      text: 'Join our Telegram',
      href: 'https://t.me/XRPPBSC',
    },
  },
];

const TokenomicsScreen = () => (
  <Wrapper>
    <HeroIndex />
    {sections.map((i) => (
      <Section {...i} key={i.id} />
    ))}
  </Wrapper>
);

export default TokenomicsScreen;
