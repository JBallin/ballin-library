import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

class SearchBar extends React.Component {
  state = {
    query: '',
  }

  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    onChange(e.target.value);
    this.setState({ query: e.target.value });
  }

  render = () => {
    const { placeholder } = this.props;
    const { query } = this.state;
    return (
      <Input
        placeholder={placeholder}
        value={query}
        onChange={this.handleChange}
        className="bg-light rounded"
      />
    );
  }
}

export default SearchBar;
