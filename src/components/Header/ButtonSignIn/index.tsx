import { RiGoogleFill } from "react-icons/ri";
import { Container } from "./styles";

export function ButtonSignIn() {

  function handleButtonSignInWithGoogle() {
    // Fazer o login
  }

  return (
    <Container>
      <button onClick={handleButtonSignInWithGoogle}>
        <RiGoogleFill />
        Entrar com o Google
      </button>
    </Container>
  );
}