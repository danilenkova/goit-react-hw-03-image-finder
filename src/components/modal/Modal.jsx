import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, StyledModal, ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {
    images: this.props.collection,
    currentImage: this.props.currentImage,
    index: 0,
  };
  static propTypes = {
    collection: PropTypes.array.isRequired,
    currentImage: PropTypes.object.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
    if (e.code === 'ArrowRight') {
      this.setState({ index: this.state.images.indexOf(this.state.currentImage) + 1 });
      if (this.state.index === this.state.images.length) {
        this.getImage(0);
        return;
      }
      this.getImage(this.state.index);
    }
    if (e.code === 'ArrowLeft') {
      this.setState({ index: this.state.images.indexOf(this.state.currentImage) - 1 });
      if (this.state.index < 0) {
        this.getImage(this.state.images.length - 1);
        return;
      }
      this.getImage(this.state.index);
    }
  };

  getImage = index => {
    this.setState({ currentImage: this.state.images[index] });
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <StyledModal>
          <ModalImage
            src={this.state.currentImage.largeImageURL}
            alt={this.state.currentImage.tags}
          />
        </StyledModal>
      </Overlay>,
      modalRoot,
    );
  }
}
