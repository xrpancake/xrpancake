import styled from '@emotion/styled';

export const Wrapper = styled.section`
  position: relative;
  display: block;
  padding: 0;
  margin: 40px auto;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 35px;
  grid-row-gap: 25px;
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
  padding: 15px 10px 10px;
  h2 {
    font-size: 15px;
    margin: 0;
  }
  .text {
    font-size: 25px;
    color: var(--color-text-secondary);
    margin: 0;
    span {
      color: var(--color-button-primary);
    }
  }
`;
