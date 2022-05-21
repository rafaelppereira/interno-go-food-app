import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: var(--context);
  margin: 3rem auto 0 auto;
  padding: 0 2rem;
`;

export const Context = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  margin-top: 1rem;

  @media (max-width: 1140px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
