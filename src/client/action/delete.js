import React from 'react';
import PropTypes from 'prop-types';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { target, onDelete } = this.props;
    e.preventDefault();
    onDelete(target);
  }

  render() {
    return (
      <div className="delete">
        <button type="button" className="delete__btn" onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

Delete.propTypes = {
  target: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Delete;
