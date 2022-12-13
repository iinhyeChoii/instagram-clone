import { TouchableOpacity } from 'react-native';
import {
  Container,
  Text,
  Title,
} from '../components/styles/CommonStyledComponents';
import { RootStackScreenProps } from '../types';

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<'NotFound'>) {
  return (
    <Container>
      <Title>This screen doesn't exist.</Title>
      <TouchableOpacity onPress={() => navigation.replace('Root')}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </Container>
  );
}
