import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: var(--header-height);  

  border-bottom: 1px solid var(--gray-300);
`;

export const Content = styled.div`
  max-width: var(--context);
  margin: 0 auto;
  padding: 0 2rem;

  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display:flex;
  align-items: center;

  img {
    width: 100%;
    max-width: 11rem;

    object-fit: cover;
    flex-shrink: 0;
  }
`;

export const Form = styled.form`
  position: relative;
  margin-left: 2rem;

  svg {
    position: absolute;
    left: 17px;
    top: 50%;

    transform: translateY(-50%);
    color: var(--gray-400);
  }

  input {
    width: 333px;
    height: 55px;
    border: 0;
    border-radius: 5rem;

    background-color: var(--gray-100);
    padding-left: 2.6rem;
    outline: none;

    border: 2px solid;
    border-color: var(--gray-100);
    transition: border-color 0.2s;

    &::placeholder {
      color: var(--gray-400);
    }

    &:focus {
      border-color: var(--orange-500);
    }
  }

  @media (max-width: 1140px) {
    input, svg {
      display: none;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;


