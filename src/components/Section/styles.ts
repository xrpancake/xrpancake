import styled from '@emotion/styled';

export const Wrapper = styled.section<{ color: string }>`
  text-align: left;
  padding: 100px 0;
  background-color: ${(props) => `var(${props.color})`};
  transition: all 0.25s ease-in-out;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const Container = styled.div<{ inverted: boolean }>`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.inverted ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  @media (min-width: 769px) and (max-width: 1115px) {
    padding-right: calc(160px / 2);
    padding-left: calc(160px / 2);
  }
  @media (min-width: 769px) {
    padding-right: calc((100% - 955px) / 2);
    padding-left: calc((100% - 955px) / 2);
  }
  @media (max-width: 768px) {
    display: block;
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const ImageWrapper = styled.div`
  width: calc(55% - 69px);
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  object-fit: cover;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 0 0 30px;
  }
  svg {
    width: 100%;
    overflow: hidden;
    path {
      &.background {
        fill: var(--color-section-svg-bg);
      }
      &.elements {
        fill: var(--color-section-svg-element);
      }
      &.lines {
        fill: var(--color-text-primary);
      }
    }
  }
`;

export const Text = styled.div`
  width: calc(50% - 35px);
  padding: 0 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.span`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  &.hero {
    margin: 30px 0;
  }
  span {
    display: inline-block;
    border-radius: 4px;
    padding: 20px 45px;
    color: #002358;
    background-color: var(--color-button-primary);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.04em;
    transition: all 0.25s ease-in-out;
    svg {
      margin-left: 5px;
      margin-bottom: -1px;
      stroke: #002358;
      transition: all 0.25s ease-in-out;
      @media (max-width: 567px) {
        margin-bottom: -2px;
      }
    }
  }
  &:hover {
    span {
      background-color: var(--color-button-primaryHover);
    }
  }
`;
