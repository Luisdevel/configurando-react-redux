import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

function Header() {
  const clickButton = useSelector(state => state.example.clickButton);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="asd">
        <FaSignInAlt size={24} />
      </Link>
      {clickButton ? 'Click' : 'Not Click'}
    </Nav>
  );
}

export default Header;
