import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo GoBarber" />
        <form>
          <h1>Faça seu login</h1>

          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="to-do">Esqueci minha senha</a>
        </form>
        <a href="to-do">
          <FiLogIn /> Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
