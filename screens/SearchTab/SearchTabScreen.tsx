import { RootTabScreenProps } from '../../types';
import { Container, Title } from '../../components/CommonStyledComponents';
export default function SearchTabScreen({
  navigation,
}: RootTabScreenProps<'SearchTab'>) {
  return (
    <Container>
      <Title>Search Tab Screen</Title>
    </Container>
  );
}
