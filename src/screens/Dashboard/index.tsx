import DashboardGrid from '@components/DashboardGrid';
import Hero from '@components/Hero';
import Textfield from '@components/Library/Textfield';

import Tokens from '@components/Icons/Tokens';
import CakeIcon from '@components/Icons/Cake';
import XrpIcon from '@components/Icons/Xrp';
import TimeIcon from '@components/Icons/Time';

import { Wrapper, FormWrapper } from './styles';

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
  return (
    <Wrapper>
      <Hero>XRPP Earnings Dashboard</Hero>
      <p className="text"></p>
      <FormWrapper>
        <Textfield placeholder="Paste your address here" name="wallet" />
      </FormWrapper>
      <DashboardGrid items={items} />
    </Wrapper>
  );
};

export default DashboardScreen;
