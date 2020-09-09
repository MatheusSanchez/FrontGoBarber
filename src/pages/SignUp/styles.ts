import styled from 'styled-components';
import signupBackgoundImg from '../../assets/signup-background.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch; /*items with 100vh*/
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center; /*justify content and align itemns*/
  width: 100%;
  max-width: 700px;
  align-items: center;

  form{
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1{
      margin-bottom: 24px;
    }


    a{
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover{
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a { /*just a from content*/

      color: #F4EDE8;
      display: flex;
      align-items: center;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      svg{
        margin-right:16px;
      }

      &:hover{
        color: ${shade(0.2, '#F4EDE8')};
      }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signupBackgoundImg}) no-repeat center;
  background-size: cover;
`;
