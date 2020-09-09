import styled from 'styled-components';


export const Container = styled.div`
  color: #666360;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;


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
