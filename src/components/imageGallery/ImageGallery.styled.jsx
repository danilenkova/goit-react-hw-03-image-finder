import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 0;
  margin: 0 auto 20px;
  list-style: none;
  max-width: calc(100vw - 80px);
`;
