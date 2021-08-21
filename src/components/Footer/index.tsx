import dayjs from 'dayjs';
import { FC } from 'react';

import { YouTube, Telegram, Twitter } from './Icons';

import { Left, Right, Wrapper } from './styles';

const Footer: FC = () => {
  return (
    <Wrapper>
      <Left>
        <a
          href="https://xrpancake.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Created by XRP Pancake"
        >
          Created by XRPP © {dayjs().year()}
        </a>
      </Left>
      <Right>
        <a
          href="https://t.me/XRPPBSC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <Telegram />
        </a>
        <a
          href="https://twitter.com/xrppancake"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter />
        </a>
        <a
          href="https://www.youtube.com/channel/UC3qVCyMKg-4DBqOirAH91iw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <YouTube />
        </a>
      </Right>
    </Wrapper>
  );
};

export default Footer;
