import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -15px, 0);
  }

  70% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const Wrapper = styled.div`
  grid-area: logo;
  padding-top: 2px;
  margin-left: 42px;
  @media (max-width: 1023px) {
    margin-left: 30px;
  }
  @media (max-width: 568px) {
    padding-left: 30px;
    margin: 0;
  }
  span {
    display: block;
  }
  a {
    display: flex;
  }
`;

export const ImageWrapper = styled.svg`
  width: 120px;
  margin-top: -10px;
  @media (min-width: 568px) {
    width: 150px;
  }
  @media (min-width: 1024px) {
    width: 180px;
  }
  g.pcs {
    animation: ${bounce} 1s ease infinite;
  }
  path {
    transform: translate3d(0, 15px, 0);
    fill: var(--color-text-primary);
    transition: fill 0.25s ease-in-out;
    &.cls-1,
    &.cls-4 {
      fill: #633001;
    }
    &.cls-2 {
      fill: #fedc90;
    }
    &.cls-3 {
      fill: #d1884f;
    }
  }
`;
