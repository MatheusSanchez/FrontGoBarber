import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { Container, Content, Background } from './styles';



const SignIn: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log("adsa")
    console.log(DataTransferItemList)
  }


  return (<Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <h1>Fala seu Logon</h1>
        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>



      </Form>
      <a href="login">
        <FiLogIn />
        Criar Conta
      </a>

    </Content>

    <Background />
  </Container >
  )
}



export default SignIn;
