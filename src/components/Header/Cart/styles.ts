import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  margin-left: 1.3rem;
  
  color: var(--gray-500);

  background-color: var(--gray-100);
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  transition: opacity 0.2s;

  position: relative;

  svg {
    margin-right: 0.5rem;
  }


  &:hover {
    opacity: 0.8;
  }
`;

export const Drawer = styled.div`

`;
