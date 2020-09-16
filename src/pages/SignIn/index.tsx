import React, { useRef, useCallback } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as yup from 'yup'

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import getValidationErrors from '../../utils/getValidationErrors'

import { Container, Content, Background } from './styles';



const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {

    try {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({

        name: yup.string().required("Nome é obrigatório !"),
        email: yup.string().required("E-mail é obrigatório !").email(),
        password: yup.string().required("Senha Obrigatória !"),

      });

      await schema.validate(data, { abortEarly: false }); // validate all data and return all errors

    } catch (err) {
      console.log(err)

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);

    }

    console.log(data);
  }, []);


  return (<Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <Form ref={formRef} onSubmit={handleSubmit}>
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
