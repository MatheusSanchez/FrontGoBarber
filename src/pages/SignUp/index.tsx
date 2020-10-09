import React, { useCallback, useRef } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import getValidationErrors from '../../utils/getValidationErrors'

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {

    try {

      formRef.current?.setErrors({});


      const schema = yup.object().shape({
        name: yup.string().required("Nome é obrigatório !"),
        email: yup.string().required("E-mail é obrigatório !").email("Digite um e-mail válido"),
        password: yup.string().min(6, "Min de 6 dígitos"),
      });

      await schema.validate(data, { abortEarly: false }); // validate all data and return all errors


    } catch (err) {

      console.log(err)
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);

    }

    console.log(data);
  }, []);



  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>



        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para Logon
      </a>

      </Content>


    </Container >
  )
};


export default SignUp;
