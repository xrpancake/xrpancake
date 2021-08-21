import styled from '@emotion/styled';

export const Wrapper = styled.section`
  & > div {
    height: calc(100vh - 100px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
      padding-top: 36px;
      display: block;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 100%;
  padding-right: 40px;
  padding-left: 40px;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  @media (max-width: 567px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const Left = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  h1 {
    max-width: 10em;
    margin-top: 20px;
    color: var(--color-text-primary);
    font-size: 66px;
    text-align: left;
    font-weight: 700;
    line-height: 79px;
    transition: color 0.25s ease-in-out;
    @media (max-width: 1023px) {
      max-width: 100%;
      font-size: 55px;
      line-height: 69px;
      margin-bottom: 32px;
    }
    @media (max-width: 567px) {
      font-size: 45px;
      line-height: 55px;
    }
  }
  p {
    color: var(--color-text-secondary);
    font-size: 26px;
    max-width: 20em;
    font-weight: 400;
    line-height: 36px;
    margin-top: 0px;
    margin-bottom: 0px;
    transition: color 0.25s ease-in-out;
    @media (max-width: 1023px) {
      max-width: 100%;
      font-size: 20px;
      line-height: 30px;
    }
    @media (max-width: 567px) {
      width: auto;
      font-size: 18px;
      line-height: 28px;
    }
    strong {
      color: var(--color-text-primary);
      transition: color 0.25s ease-in-out;
    }
  }
`;

export const Right = styled.div`
  align-self: flex-end;
  flex: 1 1 auto;
  @media (max-width: 1023px) {
    align-self: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 800px;
  margin: 30px auto;
  img {
    border-radius: 4px;
    @media (max-width: 800px) {
      border-radius: 0;
    }
  }
`;

export const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(0 27 68 / 62%);
  border-radius: 50%;
  padding: 10px;
  height: 60px;
  width: 60px;
  z-index: 9;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: rgb(0 27 68 / 100%);
  }
  svg {
    path {
      fill: #6bffb0;
    }
  }
`;
