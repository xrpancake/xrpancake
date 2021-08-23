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
    padding: 0 30px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 35px;
  grid-row-gap: 25px;
  grid-auto-rows: 350px;
  grid-auto-flow: row dense;
`;

export const Card = styled.div`
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-bg-element);
  grid-column-start: auto;
  grid-row-start: auto;
  color: var(--color-text-primary);
  transition: all 0.25s ease-in-out;
  padding: 15px;
  h2 {
    margin-bottom: 5px;
  }
  p {
    color: var(--color-text-secondary);
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: var(--color-text-secondary);
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
