import React from 'react';
import { useTransition } from 'react-spring'
import { Container } from './styles'
import { ToastMessage, ToastProvider, useToast } from '../../hooks/ToastContext'
import Toast from './Toast/Toast'
interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();
  const messagesWithTransictions = useTransition(messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },

    })

  return (
    <Container>
      {messagesWithTransictions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container >
  );
};

export default ToastContainer
