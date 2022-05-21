import Link from 'next/link';
import { useState } from 'react';

import { 
  Container, 
  Content, 
  Left,
  Form,
  Right
} from './styles';

import { ButtonSignIn } from './ButtonSignIn';
import { Profile } from './Profile';
import { Location } from './Location';
import { Cart } from './Cart';

import { RiSearch2Line } from 'react-icons/ri';

export function Header() {

  const [login, setLogin] = useState(true);

  return (
    <Container>
      <Content>
        <Left>
          <Link href="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
          <Form>
            <RiSearch2Line />
            <input type="search" name="search" placeholder="Pesquisar por um prato..." />
          </Form>
        </Left>
        <Right>
          {login ? (
            <>
              <Location />
              <Profile />
              <Cart />
            </>
          ) : (
            <ButtonSignIn />
          )}
        </Right>
      </Content>
    </Container>
  );
}