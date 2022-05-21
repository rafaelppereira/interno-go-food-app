import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5px;  

  position:absolute;
  left: 0;
  top: 0;
`;

export const Bar = styled.div`
  height: 100%;
  background-color:red;

  animation: bar 2s ease-in-out;

  @keyframes bar {
    from {
      width:0;
    }

    to {
      width:100%;
    }
  }
`;
