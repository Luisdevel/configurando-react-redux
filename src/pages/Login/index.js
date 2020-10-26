import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { useDispatch } from 'react-redux';

function Login() {
  const dispath = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispath({
      type: 'CLICK_BUTTON',
    });
  }

  return (
    <Container>
      <h1>Login</h1>
      <button type="submit" onClick={handleClick}>Enviar</button>
    </Container>
  );
}

export default Login;
