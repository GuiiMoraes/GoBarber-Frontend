import React, { createContext, useContext, useCallback, useState } from 'react';
import crypto from 'crypto';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessagesInterface, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessagesInterface {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [toastMessages, setToastMessages] = useState<ToastMessagesInterface[]>(
    []
  );

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessagesInterface, 'id'>) => {
      const id = crypto.randomBytes(4).toString('hex');

      const toast = {
        id,
        type,
        title,
        description,
      };

      setToastMessages(state => [...state, toast]);
    },
    [setToastMessages]
  );

  const removeToast = useCallback(id => {
    setToastMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer messages={toastMessages} />
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
