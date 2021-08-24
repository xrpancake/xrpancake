import styled from '@emotion/styled';

export const Wrapper = styled.section`
  position: relative;
  display: block;
  padding: 0;
  margin: 40px auto 130px;
  max-width: 1023px;
  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 35px;
  grid-row-gap: 25px;
`;

export const Card = styled.div`
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-bg-element);
  color: var(--color-text-primary);
  text-align: left;
  transition: all 0.25s ease-in-out;
  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 15px;
  }
  h2 {
    font-size: 15px;
    margin: 0;
  }
  p {
    color: var(--color-text-secondary);
    margin: 0;
    span {
      color: var(--color-button-primary);
    }
  }
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 100%;
  border-radius: 4px 0 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-button-primary);
  svg {
    width: 20px;
    height: 100%;
    path {
      fill: #002358;
      transition: all 0.25s ease-in-out;
      &.cakeLogo0 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #633001;
      }
      &.cakeLogo1 {
        fill: #fedc90;
      }
      &.cakeLogo2 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #d1884f;
      }
      &.cakeLogo3 {
        fill: #633001;
      }
    }
  }
`;
