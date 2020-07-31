import React from 'react';

import { ToastMessagesInterface } from '../../context/toast';

import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessagesInterface[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages?.map(message => (
        <Toast message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
