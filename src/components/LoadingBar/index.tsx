import { useEffect, useState } from "react";
import { Container, Bar } from "./styles";

export function LoadingBar() {

  const [bar, setBar] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBar(false);
    }, 2000);
  }, [])

  return (
    <Container>
      {bar && (
        <Bar />
      )}
    </Container>
  );
}