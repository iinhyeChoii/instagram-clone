import { RootTabScreenProps } from '../../types';
import { Container, Title } from '../../components/styles';
export default function ShopTabScreen({
  navigation,
}: RootTabScreenProps<'ShopTab'>) {
  return (
    <Container>
      <Title>Shop Tab Screen</Title>
    </Container>
  );
}
