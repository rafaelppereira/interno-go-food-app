import {
  Container,
  Drawer,
} from './styles';

import { RiShoppingBagLine } from 'react-icons/ri';

export function Cart() {
  return (
    <>
      <Container>
        <RiShoppingBagLine />
        Sacola
        <Drawer>
          ...
        </Drawer>
      </Container>
    </>
  )
}