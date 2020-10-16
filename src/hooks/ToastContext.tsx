import React, { createContext, useCallback, useContext, useState } from 'react'
import ToastContainer from '../components/ToastContainer/ToastContainer'
import { uuid } from 'uuidv4'

export interface ToastMessage {
  id: string;
  type?: 'sucess' | 'error' | 'info';
  description?: string;
  title: string;

}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}


function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');

  }
  return context;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {

  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description
    };

    setMessages(oldMessages => [...oldMessages, toast]);

    console.log("Add Toast");
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages((oldMessages) => (oldMessages.filter(messages => messages.id != id)));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}

export { ToastProvider, useToast };


