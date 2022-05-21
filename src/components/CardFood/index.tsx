import { Container, Data, Title, Description, Seal } from "./styles";

import { RiStarFill } from 'react-icons/ri';

interface CardFoodProps {
  title: string;
  description: string;
  price?: number;
  image: string;
}

export function CardFood({ title, description, price, image}: CardFoodProps) {
  return (
    <Container>
      <img src={image} alt={title} />
      <Data>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Seal>
          <RiStarFill />
          Destaque
        </Seal>
      </Data>
    </Container>
  );
}