import React from 'react';
import PropTypes from 'prop-types';

class Read extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { filterText } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Search by Owner"
          value={filterText}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Read.propTypes = {
  filterText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Read;
