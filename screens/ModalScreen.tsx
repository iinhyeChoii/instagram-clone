import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Container, Title } from '../components/styles';

export default function ModalScreen() {
  return (
    <Container>
      <Title>Modal</Title>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Container>
  );
}
