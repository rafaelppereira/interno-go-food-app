import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.07);
  background-color: var(--white);
  border-radius: 2rem;

  width: 100%;

  cursor: pointer;
  transition: transform 0.2s;

  img {
    width: 100%;
    max-height: 258px;

    object-fit: cover;
    flex-shrink:0;

    border-radius: 2rem 2rem 0 0;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const Data = styled.div`
  padding: 0.3rem 1.3rem 1.3rem 1.3rem;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-500);
`;

export const Description = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  opacity: 0.7;
  margin-top: 0.2rem;
`;

export const Seal = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  opacity: 0.7;
  margin-top: 0.2rem;

  color: var(--white);
  padding: 0.2rem;
  border-radius:10rem;
  margin-top: 0.7rem;

  display: inline-flex;
  align-items: center;

  background-color: var(--orange-500);

  svg {
    margin-right: 0.3rem;
    position: relative;
    top: -1px;
  }
`;

