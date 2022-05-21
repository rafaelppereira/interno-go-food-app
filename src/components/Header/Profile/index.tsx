import toast from 'react-hot-toast';
import { 
  Container,
  Flex,
} from './styles';

export function Profile() {

  function handleActiveProfile() {
    toast.error('Essa funcionalidade está em manutenção!');
  }

  return (
    <Container>
      <button onClick={handleActiveProfile}>
        <Flex>
          <img src="https://github.com/rafaelppereira.png" alt="Rafael Pereira" />
        </Flex>
      </button>
    </Container>
  )
}