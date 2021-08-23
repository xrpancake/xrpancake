import CardGrid from '@components/CardGrid';
import Hero from '@components/Hero';
import HeroIndex from '@components/HeroIndex';
import Section from '@components/Section';

import CakeIcon from '@components/Icons/Cake';
import XrpIcon from '@components/Icons/Xrp';
import TimeIcon from '@components/Icons/Time';
import LiquidityIcon from '@components/Icons/Liquidity';
import LockIcon from '@components/Icons/Lock';
import MarketingIcon from '@components/Icons/Marketing';

import SafeIcon from '@components/Icons/Safe';
import RewardIcon from '@components/Icons/Reward';
import TelegramIcon from '@components/Icons/Telegram';

import { Wrapper } from './styles';

const cards = [
  {
    id: 1,
    title: `5% reflection In XRP`,
    text: `5% of every transaction redistributed to all holders. Hold $XRPP tokens, earn XRP. `,
    icon: <XrpIcon />,
  },
  {
    id: 2,
    title: `5% reflection In CAKE`,
    text: `5% of every transaction redistributed to all holders. Hold $XRPP tokens, earn CAKE. `,
    icon: <CakeIcon />,
  },
  {
    id: 3,
    title: `Paid every 60 minutes`,
    text: `Your reflection in XRP and CAKE rewards are automatically sent to your wallet every 60 minutes. `,
    icon: <TimeIcon />,
  },
  {
    id: 4,
    title: `3% Auto liquidity pool`,
    text: `To help create a price floor, 3% of every transaction is converted into liquidity for Pancakeswap.`,
    icon: <LiquidityIcon />,
  },
  {
    id: 5,
    title: `Locked and secure`,
    text: `The initial liquidity provided is locked with Mudra Liquidity Locker for 5 months.`,
    icon: <LockIcon />,
  },
  {
    id: 6,
    title: `Ambitious marketing`,
    text: `3% of every transaction will facilitate the operational efforts in growing XRPP and it's community.`,
    icon: <MarketingIcon />,
  },
];

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
    image: <SafeIcon />,
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
    image: <RewardIcon />,
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
    image: <TelegramIcon />,
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
    <Hero>Big vision. Bigger rewards.</Hero>
    <CardGrid cards={cards} />
    {sections.map((i) => (
      <Section {...i} key={i.id} />
    ))}
  </Wrapper>
);

export default TokenomicsScreen;
