import React, { useEffect } from 'react';

import { ToastMessage, useToast } from '../../../hooks/ToastContext'
import { Container } from './style'

import { FiAlertCircle, FiXCircle, FiCheckCircle, FiInfo } from 'react-icons/fi'

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  sucess: <FiCheckCircle size={24} />,
}



const Toast: React.FC<ToastProps> = ({ message }) => {

  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000);

    return () => {
      clearTimeout(timer);
    }

  }, [message.id, removeToast])

  return (
    <Container type={message.type} hasDescription={!!message.type}>
      {icons[message.type || 'info']}
      <div>
        <strong>
          {message.title}
          {message.description &&
            <p> {message.description}</p>
          }

        </strong>
      </div>
      <button type='button' onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  )
}

export default Toast;
