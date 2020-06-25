import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundPng from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background-color: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background-color: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      font-weight: 500;
      width: 100%;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.15, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.25, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;

    color: #ff9000;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.25, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${signInBackgroundPng});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
