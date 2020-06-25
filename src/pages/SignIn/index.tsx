import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo GoBarber" />
        <form>
          <h1>Faça seu login</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

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
