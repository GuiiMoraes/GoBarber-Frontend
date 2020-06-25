import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Logo GoBarber" />
        <form>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="to-do">
          <FiArrowLeft /> Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
