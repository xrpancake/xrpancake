import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button as Anchor } from '@components/CTA/styles';
import ChevronRight from '@components/CTA/ChevronRight';

import { Container, ImageWrapper, Text, Wrapper, Button } from './styles';

type Props = {
  title: ReactNode;
  text: ReactNode;
  image: string;
  color: string;
  button?: any;
  anchor?: any;
  inverted?: boolean;
};

const Section: React.FC<Props> = ({
  color,
  title,
  text,
  image,
  button,
  anchor,
  inverted,
}) => {
  return (
    <Wrapper color={color}>
      <Container inverted={inverted ? true : false}>
        <span className="mobile-h2">{title}</span>
        <ImageWrapper>
          <Image
            src={image}
            alt="AMA with Whale-Coin"
            width="500px"
            height="500px"
          />
        </ImageWrapper>
        <Text>
          <span className="desktop-h2">{title}</span>
          {text}
          {button && (
            <Link href={button.href} passHref>
              <Button className="hero">
                <span>
                  {button.text}
                  <ChevronRight />
                </span>
              </Button>
            </Link>
          )}
          {anchor && (
            <Anchor
              className="hero"
              href={anchor.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={anchor.text}
            >
              <span>
                {anchor.text}
                <ChevronRight />
              </span>
            </Anchor>
          )}
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Section;
