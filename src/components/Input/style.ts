import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}


export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  color: #666360;
  border: 2px solid #232129;

  ${props => props.isFocused && css`

    color: #FF9000;
    border-color: #FF9000;
  `}

  ${props => props.isFilled && css`

    color: #FF9000;

  `}


  input{
    background: transparent;
    flex: 1 ; /*get all space that you can*/
    border: 0;
    color:#F4EDE8;

    &::placeholder{
      color:#F4EDE8;
    }
  }

  & + div{
      margin-top: 8px;
    }

  svg{
    margin-right: 16px;
  }

`;
