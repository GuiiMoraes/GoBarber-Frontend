import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import { useAuth } from '../../context/auth';
import { useToast } from '../../context/toast';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';
import { Container, Content, AnimationContainer, Background } from './styles';
import { getValidationErrors } from '../../utils';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (formData: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Please enter a valid email')
            .required('E-mail is required'),
          password: Yup.string().required('Password is required'),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });

        await signIn({
          email: formData.email,
          password: formData.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);

        addToast({
          type: 'error',
          title: 'Authentication error',
          description:
            'An error occurred during login try, check your credentials',
        });

        formRef.current?.setErrors(errors);
      }
    },
    [signIn, addToast]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Logo GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Sign in</h1>

            <Input
              name="email"
              icon={FiMail}
              placeholder="E-mail"
              data-cy="email-input"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
              data-cy="password-input"
            />

            <Button type="submit" data-cy="form-submit">
              Enter
            </Button>

            <a href="to-do">Forgot password</a>
          </Form>
          <Link to="sign-up">
            <FiLogIn /> Sign Up
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
