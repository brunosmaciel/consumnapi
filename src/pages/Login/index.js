import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, P } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>aa</small>
      </Title>
      <P>lorem</P>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
