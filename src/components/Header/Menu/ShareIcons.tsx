import React from 'react';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

import { ShareWrapper } from './styles';

type Props = {
  shareTitle: string;
  shareUrl: string;
  isVote?: boolean;
};

const ShareIcons = ({ shareTitle, shareUrl }: Props) => {
  const hashtagFB = '#XRPPancake';
  const hashtagTW = 'XRPPancake';

  return (
    <ShareWrapper>
      <FacebookShareButton
        url={shareUrl}
        hashtag={hashtagFB}
        quote={shareTitle}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={shareUrl} appId="880027589609658">
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={shareTitle}
        via="XRPPancake"
        hashtags={[hashtagTW]}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <TelegramShareButton url={shareUrl} title={shareTitle}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton url={shareUrl} title={shareTitle} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton source={shareUrl} url={shareUrl} title={shareTitle}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton url={shareUrl} title={shareTitle}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <EmailShareButton url={shareUrl} subject={shareTitle}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </ShareWrapper>
  );
};

export default ShareIcons;
