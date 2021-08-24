import styled from '@emotion/styled';

export const Wrapper = styled.div`
  table {
    display: block;
    width: 100%;
    border-spacing: 0;
  }
  tr {
    display: flex;
    justify-content: stretch;
    border-bottom: 1px solid var(--color-bg-element);
    align-items: left;
    padding: 0 20%;
    transition: border 0.25s ease-in-out;
    @media (max-width: 1680px) {
      padding: 0 10%;
    }
    @media (max-width: 1200px) {
      padding: 0 48px;
    }
    @media (max-width: 1024px) {
      padding: 0 28px;
    }
    @media (max-width: 567px) {
      padding: 0 16px;
    }
  }
  tbody,
  thead {
    display: block;
  }
  td {
    display: flex;
    padding: 12px 4px 13px;
    min-height: 76px;
    align-items: center;
    text-align: left;
    width: 50%;
  }
  th {
    width: 50%;
    text-align: left;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    padding: 12px 4px 13px;
    transition: color 0.25s ease-in-out;
  }
`;
