/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Redx } from './styled';

export default function Header() {
  const buttonClicked = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login/">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/logout/">
        <FaSignInAlt size={24} />
      </Link>
      <Redx>{buttonClicked ? 'Clicado' : 'Nao clicado'}</Redx>
    </Nav>
  );
}
