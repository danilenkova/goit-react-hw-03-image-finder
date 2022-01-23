import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchBar, Form, Input, SearchButton } from './SearchBar.styled';
import { NOT_ALERTS, myAlert } from '../service/alerts';
import { ImSearch } from 'react-icons/im';

class SearchBar extends Component {
  state = {
    searchQuery: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  handleSearchQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newSearchQuery = this.state.searchQuery.toLowerCase();
    if (newSearchQuery.trim() === '') {
      return myAlert(NOT_ALERTS.EMPTY);
    }
    if (!newSearchQuery.match(/^[a-zA-Z,() ']*$/)) {
      return myAlert(NOT_ALERTS.NO_VALID);
    }
    this.props.onSubmit(newSearchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <StyledSearchBar>
        <Form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.searchQuery}
            onChange={this.handleSearchQueryChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchButton type="submit">
            <ImSearch />
          </SearchButton>
        </Form>
      </StyledSearchBar>
    );
  }
}

export default SearchBar;
