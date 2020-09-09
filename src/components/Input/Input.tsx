import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons'
import { Container } from './style';

import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;

} // get all props from input tag html, name is request

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...props }) => {

  const inputRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);


  return (
    <Container>
      {Icon && <Icon />}
      <input ref={inputRef} {...props} type="text" />
    </Container >

  )
};

export default Input;
