import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonLocation = styled.button`
  transition: background-color 0.2s;
  padding: 0.5rem 1rem;
  border-radius: 5rem;

  &:hover {
    background-color: var(--gray-100);
  }
`;


export const Text = styled.h3`
  color: var(--gray-400);
  font-weight: 300;
  font-size: 1rem;
`;


export const Address = styled.span`
  margin-top: 0.2rem;
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  color: var(--gray-500);

  svg {
    &:first-child {
      margin-right: 0.3rem;
    }

    &:last-child {
      margin-left: 0.3rem;
    }
  }
`;
