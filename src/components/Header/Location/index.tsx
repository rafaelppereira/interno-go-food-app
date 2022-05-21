import { 
  Container,
  ButtonLocation,
  Text,
  Address,
} from './styles';

import { RiArrowDownSLine, RiMapPin2Line } from 'react-icons/ri';

export function Location() {
  return (
    <Container>
      <ButtonLocation>
        <Text>Entregar no endereço</Text>
        <Address>
          <RiMapPin2Line />
          Candido Amaro Damásio, 1050
          <RiArrowDownSLine />
        </Address>
      </ButtonLocation>
    </Container>
  );
}