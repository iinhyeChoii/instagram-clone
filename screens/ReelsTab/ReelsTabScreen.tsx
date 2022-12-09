import { RootTabScreenProps } from '../../types';
import { Container, Title } from '../../components/CommonStyledComponents';
export default function ReelsTabScreen({
  navigation,
}: RootTabScreenProps<'ReelsTab'>) {
  return (
    <Container>
      <Title>Reels Tab Screen</Title>
    </Container>
  );
}
