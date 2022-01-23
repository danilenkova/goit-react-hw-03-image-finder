import styled from 'styled-components';

export const GalleryItem = styled.li`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5), 0px 1px 1px 0px rgba(0, 0, 0, 0.5),
    0px 2px 1px -1px rgba(0, 0, 0, 0.5);
  transition: transform var(--animation-duration) var(--timing-function);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const GalleryPhoto = styled.img`
  display: block;
  width: 100%;
  height: 260px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;
`;
