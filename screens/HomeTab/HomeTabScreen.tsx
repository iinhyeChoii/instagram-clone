import { RootTabScreenProps } from '../../types';
import { Container, Title } from '../../components/styles';
export default function HomeTabScreen({
  navigation,
}: RootTabScreenProps<'HomeTab'>) {
  return (
    <Container>
      <Title>Home Tab Screen</Title>
    </Container>
  );
}
