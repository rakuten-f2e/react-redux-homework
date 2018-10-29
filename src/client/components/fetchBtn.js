import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class FetchBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    axios.get('api/tabledatas')
      .then((response) => {
        const tableData = response.data;
        onClick(tableData);
      })
      .catch((err) => {
        console.log(new Error(err));
      });
  }

  render() {
    return (
      <div className="fetch">
        <button
          type="button"
          className="fetch__btn"
          name="fetch"
          onClick={this.handleClick}
        >
          fetchData
        </button>
      </div>
    );
  }
}

FetchBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FetchBtn;
