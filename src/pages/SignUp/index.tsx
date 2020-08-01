import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { getValidationErrors } from '../../utils';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';
import { Container, Content, AnimationContainer, Background } from './styles';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (formData: FormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .email('Please enter a valid email')
          .required('E-mail is required'),
        password: Yup.string()
          .min(6, 'Minimum 6-digit length')
          .required('Password is required'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Logo GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Sign up</h1>

            <Input name="name" icon={FiUser} type="text" placeholder="Name" />
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Register</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft /> Back to sign in
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
