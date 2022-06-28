import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #fff;
    margin: 0 10px;
    font-weight: bold;
  }
`;

export const Redx = styled.p`
  color: black;
`;
