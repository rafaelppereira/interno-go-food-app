import Head from "next/head";
import { CardFood } from "../components/CardFood";
import { Header } from "../components/Header";
import { Promotions } from "../components/Promotions";
import { Title } from "../components/Title";
import { products } from "../services/api";
import { Container, Context } from "../styles/home";

export default function Screen() {
  return (
    <>
      <Head>
        <title>GoFood | Tela de produtos</title>
      </Head>
      <Header />
      <Promotions />

      <Container>
        <Title title="Todos os produtos" />

        <Context>
          {products.map((item) => (
            <CardFood 
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </Context>


      </Container>
    </>
  );
}