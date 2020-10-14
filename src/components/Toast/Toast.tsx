import React from 'react';
import { Container, Toasts } from './styles'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'


const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toasts type="sucess" hasDescription >

        <FiAlertCircle size={20} />

        <div>
          <strong>
            Aconteceu um Erro
            <p> Não foi possível fazer login na apĺicação</p>
          </strong>
        </div>
        <button type='button'>
          <FiXCircle size={18} />
        </button>
      </Toasts>
      <Toasts hasDescription >

        <FiAlertCircle size={20} />

        <div>
          <strong>
            Aconteceu um Erro
    <p> Não foi possível fazer login na apĺicação</p>
          </strong>
        </div>
        <button type='button'>
          <FiXCircle size={18} />
        </button>
      </Toasts>
      <Toasts type="error" hasDescription={false} >

        <FiAlertCircle size={20} />

        <div>
          <strong>
            Aconteceu um Erro

          </strong>
        </div>
        <button type='button'>
          <FiXCircle size={18} />
        </button>
      </Toasts>
    </Container>
  );
};

export default ToastContainer
