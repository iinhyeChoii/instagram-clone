import { RootTabScreenProps } from '../../../types';
import { Container, Title } from '../../components/styles';
export default function ProfileTabScreen({
  navigation,
}: RootTabScreenProps<'ProfileTab'>) {
  return (
    <Container>
      <Title>Profile Tab Screen</Title>
    </Container>
  );
}
