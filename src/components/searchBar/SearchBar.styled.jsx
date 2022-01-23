import styled from 'styled-components';

export const StyledSearchBar = styled.header`
  width: 100vw;
  top: 0;
  left: 0;
  position: sticky;
  /* z-index: 1100; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  top: 20px;
  @media screen and (min-width: 480px) {
    width: 300px;
  }
  height: 40px;
  width: 350px;
  display: flex;
  text-align: center;
  border-radius: 20px;
  border: 0;
  outline: none;
  margin: 0 auto;
  padding: 0;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),
    1px 4px 6px rgba(0, 0, 0, 0.5), inset 0px 1px 1px rgba(0, 0, 0, 0.12),
    inset 0px 4px 4px rgba(0, 0, 0, 0.15), inset 1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Input = styled.input`
  @media screen and (min-width: 480px) {
    width: 250px;
  }
  height: 40px;
  width: 290px;
  padding: 0 0 0 15px;
  border: 0;
  outline: none;
  background: transparent;
  opacity: 0.75;
`;

export const SearchButton = styled.button`
  position: relative;
  cursor: pointer;
  display: block;
  height: 40px;
  width: 60px;
  border: 0;
  padding: 0;
  border-radius: 0 20px 20px 0;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  color: #ffffff;
  text-shadow: -1px -2px 1px #000;
  transition: text-shadow var(--animation-duration) var(--timing-function);
  :focus,
  :hover {
    color: #e0c3fc;
    text-shadow: -1px -2px 1px #000;
  }
  :disabled {
    color: #ffffff;
    background-color: #8ec5fc;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  }
  :focus,
  :hover {
    color: #ffffff;
    background-color: #8ec5fc;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
