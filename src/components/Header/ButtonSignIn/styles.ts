import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: var(--orange-500);
    padding: 0.8rem 1rem;

    display: flex;
    align-items: center;

    color: var(--white);

    border-radius: 5rem;
    transition: all 0.2s;

    svg {
      margin-right: 0.5rem;
    }

    &:hover {
      filter: brightness(0.9);
      transform: scale(1.02);
    }
  }
`;
