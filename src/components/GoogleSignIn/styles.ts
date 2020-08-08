import styled from 'styled-components';
import { shade } from 'polished';

export const GoogleSignInButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
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
    background-color: ${shade(0.15, '#fff')};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100% !important;
    background-color: transparent !important;
    box-shadow: none !important;
    outline: 0;

    &:hover {
      box-shadow: none;
    }

    div {
      background-color: transparent !important;
    }
  }
`;
