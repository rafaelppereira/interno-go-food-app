import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-right: 1px solid var(--gray-200);
  padding-right: 1.3rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 55px;
  height: 55px;
  border-radius: 50%;

  border: 2px solid var(--orange-500);

  img {
    width: 100%;
    height: 100%;

    padding: 2px;

    object-fit: cover;
    flex-shrink: 0;

    border-radius: 50%;
  }
`