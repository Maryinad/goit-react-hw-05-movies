import styled from 'styled-components';

export const Btn = styled.button`
  text-decoration: none;

  width: 100px;
  border: 1px solid #227093;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  padding: 5px 0;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    background-color: #227093;
    color: #fff;
  }
`;
