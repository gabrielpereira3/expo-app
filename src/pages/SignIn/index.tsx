import React from 'react-native';
import { Container, PasswordInput, Title, UserInput } from './styles';

export const SignIn = () => {
  return (
    <Container>
      <Title>SignIn Page</Title>
      <UserInput
        placeholder="Login"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={'#fff'}
      />
      <PasswordInput
        placeholder="Senha"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        placeholderTextColor={'#fff'}
      />
    </Container>
  );
};
