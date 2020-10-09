import React, { useRef, useCallback, useContext } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as yup from 'yup'

import { AuthContext } from '../../context/AuthContext';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import getValidationErrors from '../../utils/getValidationErrors'

import { Container, Content, Background } from './styles';
import { sign } from 'crypto';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { user, signIn } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = useCallback(async (data: SignInFormData) => {

    try {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({


        email: yup.string().required("E-mail é obrigatório !").email(),
        password: yup.string().required("Senha Obrigatória !"),

      });

      await schema.validate(data, { abortEarly: false }); // validate all data and return all errors

      signIn({ email: data.email, password: data.password });

    } catch (err) {
      console.log(err)

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);

    }

    console.log(data);
  }, [signIn]);


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
