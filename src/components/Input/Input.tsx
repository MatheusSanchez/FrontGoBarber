import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons'
import { Container } from './style';

import { useField } from '@unform/core'; // hook that receive name of camp, and return some proprieties

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;

} // get all props from input tag html, name is request

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...props }) => {

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // ref from input

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }


  }, [])

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, [])



  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);


  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon />}
      <input onFocus={handleFocus}
        onBlur={handleInputBlur}
        ref={inputRef} {...props} type="text" />

      {error}
    </Container >

  )
};

export default Input;
