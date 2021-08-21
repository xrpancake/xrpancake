import { FC, useState } from 'react';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';

import VideoIcon from './VideoIcon';

import { ImageWrapper, Button } from './styles';
import isClientSide from '@utils/isClientSide';

const Video: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isClientSide && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="fdgkFyrrKo0"
          onClose={() => setOpen(false)}
        />
      )}
      <ImageWrapper>
        <Button onClick={() => setOpen(true)}>
          <VideoIcon />
        </Button>
        <Image
          src="/hero.gif"
          alt="AMA with Whale-Coin"
          width="450px"
          height="450px"
        />
      </ImageWrapper>
    </>
  );
};

export default Video;
