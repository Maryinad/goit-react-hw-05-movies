import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BtnBack = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100px;
  border: 1px solid #227093;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    background-color: #227093;
    color: #fff;
  }
`;
