import React, { useCallback, useRef } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import api from '../../services/api'

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import getValidationErrors from '../../utils/getValidationErrors'
import { useToast } from '../../hooks/ToastContext'

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {


  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: object) => {

    try {

      formRef.current?.setErrors({});


      const schema = yup.object().shape({
        name: yup.string().required("Nome é obrigatório !"),
        email: yup.string().required("E-mail é obrigatório !").email("Digite um e-mail válido"),
        password: yup.string().min(6, "Min de 6 dígitos"),
      });

      await schema.validate(data, { abortEarly: false }); // validate all data and return all errors

      await api.post('/users', data);
      addToast({
        type: 'sucess',
        title: 'Cadastro Realizado!',
        description: 'Você ja pode fazer seu LogIn no GoBarber :) !'
      });

      history.push('/');


    } catch (err) {

      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro no cadastro',
      });

    }

    console.log(data);
  }, [addToast, history]);



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
        <Link to='/'>
          <FiArrowLeft />
          Voltar para Logon
          </Link>

      </Content>
    </Container >
  )
};


export default SignUp;
