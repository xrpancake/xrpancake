import { useState, useEffect } from 'react';

import DashboardGrid from '@components/DashboardGrid';
import PayGrid from '@components/PayGrid';
import Hero from '@components/Hero';
import Textfield from '@components/Library/Textfield';

import Tokens from '@components/Icons/Tokens';
import CakeIcon from '@components/Icons/Cake';
import XrpIcon from '@components/Icons/Xrp';
import TimeIcon from '@components/Icons/Time';

import { Wrapper, FormWrapper } from './styles';
import numberWithCommas from '@hooks/useFormatNumber';
import Form, { Field } from '@components/Library/Form';
import PaperIcon from '@components/Icons/Paper';

const DashboardScreen = () => {
  const [wallet, setWallet] = useState('');
  const [xrp, setXrp] = useState('0');

  const Web3 = require('web3');
  const provider = 'https://bsc-dataseed1.binance.org:443';

  const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
  const minABI = [
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: 'balance', type: 'uint256' }],
      type: 'function',
    },
  ];
  const xrppAddress = '0x5760ed58d66ba764c4c3073fc58aa471ea442efc';

  const contract = new Web3Client.eth.Contract(minABI, xrppAddress);

  async function getXRPPBalance() {
    const result = await contract.methods.balanceOf(wallet).call();
    const format = Web3Client.utils.fromWei(result);
    setXrp(numberWithCommas(format));
  }

  useEffect(() => {
    if (Web3Client.utils.isAddress(wallet)) {
      getXRPPBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  const items = [
    {
      id: 1,
      title: `Your XRPP holdings`,
      value: <div>{xrp} XRPP</div>,
      icon: <Tokens />,
    },
    {
      id: 2,
      title: `Total XRP earned`,
      value: (
        <div>
          0 ~ <span>$0.00</span>
        </div>
      ),
      icon: <XrpIcon />,
    },
    {
      id: 3,
      title: `Total CAKE earned`,
      value: (
        <div>
          0 ~ <span>$0.00</span>
        </div>
      ),
      icon: <CakeIcon />,
    },
    {
      id: 4,
      title: `Last payout`,
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
  ];
  return (
    <Wrapper>
      <Hero>XRPP Earnings Dashboard</Hero>
      <p className="text">Under maintenance. Will be available shortly.</p>
      <FormWrapper>
        <Form onSubmit={(data: { wallet: string }) => setWallet(data.wallet)}>
          {({ formProps }) => (
            <form {...formProps}>
              <Field name="wallet" defaultValue="" isRequired>
                {({ fieldProps }) => (
                  <>
                    <Textfield
                      placeholder="Paste your address here"
                      elemBeforeInput={<PaperIcon />}
                      {...fieldProps}
                    />
                  </>
                )}
              </Field>
            </form>
          )}
        </Form>
      </FormWrapper>
      <DashboardGrid items={items} />
      <PayGrid items={cards} />
    </Wrapper>
  );
};

export default DashboardScreen;
