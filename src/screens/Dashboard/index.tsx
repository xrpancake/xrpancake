import DashboardGrid from '@components/DashboardGrid';
import PayGrid from '@components/PayGrid';
import Hero from '@components/Hero';
import Textfield from '@components/Library/Textfield';

import Tokens from '@components/Icons/Tokens';
import CakeIcon from '@components/Icons/Cake';
import XrpIcon from '@components/Icons/Xrp';
import TimeIcon from '@components/Icons/Time';

import { Wrapper, FormWrapper } from './styles';
import Button from '@atlaskit/button';

const DashboardScreen = () => {
  const items = [
    {
      id: 1,
      title: `Your XRPP holdings`,
      value: <div>0 XRPP</div>,
      icon: <Tokens />,
    },
    {
      id: 2,
      title: `Total XRP paid`,
      value: (
        <div>
          0 ~ <span>$0.00</span>
        </div>
      ),
      icon: <XrpIcon />,
    },
    {
      id: 3,
      title: `Total CAKE paid`,
      value: (
        <div>
          0 ~ <span>$0.00</span>
        </div>
      ),
      icon: <CakeIcon />,
    },
    {
      id: 4,
      title: `Last payout time`,
      value: <div>Never</div>,
      icon: <TimeIcon />,
    },
  ];

  const cards = [
    {
      id: 1,
      title: `Total XRP paid to holders`,
      text: (
        <div>
          0 ~ <span>$0.00</span>
        </div>
      ),
    },
    {
      id: 2,
      title: `Total CAKE paid to holders`,
      text: (
        <div>
          0 ~ <span>$0.00</span>
        </div>
      ),
    },
    {
      id: 3,
      title: `Next payout`,
      text: <div>00:00:00</div>,
    },
  ];
  return (
    <Wrapper>
      <Hero>XRPP Earnings Dashboard</Hero>
      <p className="text">Under maintenance. Will be available shortly</p>
      <FormWrapper>
        <Textfield placeholder="Paste your address here" name="wallet" />
      </FormWrapper>
      <DashboardGrid items={items} />
      <PayGrid items={cards} />
    </Wrapper>
  );
};

export default DashboardScreen;
