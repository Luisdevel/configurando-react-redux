import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { useDispatch } from 'react-redux';
import * as exampleActions from '../../store/modules/example/actions';

function Login() {
  const dispath = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispath(exampleActions.clickButton());
  }

  return (
    <Container>
      <h1>Login</h1>
      <button type="submit" onClick={handleClick}>Enviar</button>
    </Container>
  );
}

export default Login;
