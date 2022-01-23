import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  cursor: pointer;
  width: 200px;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 7px;
  border: 0;
  text-align: center;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  text-shadow: -1px -2px 1px #000;
  transition: text-shadow var(--animation-duration) var(--timing-function);
  &:hover,
  &:focus {
    color: #e0c3fc;
    text-shadow: -1px -2px 1px #000;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
