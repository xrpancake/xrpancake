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
  background-size: cover;
  background-position: center;
  transition: all 0.25s ease-in-out;
  padding: 15px;
  h2 {
    margin-bottom: 5px;
  }
  p {
    color: var(--color-text-secondary);
  }
`;
