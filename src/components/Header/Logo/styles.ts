import styled from '@emotion/styled';

export const Wrapper = styled.div`
  grid-area: logo;
  padding-top: 2px;
  margin-left: 42px;
  @media (max-width: 1023px) {
    margin-left: 22px;
  }
  @media (max-width: 568px) {
    padding-left: 20px;
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
  margin-top: -5px;
  @media (min-width: 568px) {
    width: 150px;
  }
  @media (min-width: 1024px) {
    width: 180px;
  }
  path {
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
