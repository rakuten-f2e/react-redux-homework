import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class CreateBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { id, onClick } = this.props;
    const newRow = {
      seq: id,
      status: '',
      category: '',
      title: '',
      owner: '',
      priority: '',
    };

    axios.post('/api/tabledatas', newRow);
    onClick(newRow);
  }

  render() {
    return (
      <div className="create">
        <button
          type="button"
          className="create__btn"
          name="create"
          onClick={this.handleClick}
        >
          Create
        </button>
      </div>
    );
  }
}

CreateBtn.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CreateBtn;
