import React from 'react';
import PropTypes from 'prop-types';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { target, onUpdate } = this.props;
    const updateTarget = {
      seq: target,
      isClicked: true,
    };
    onUpdate(updateTarget);
  }

  render() {
    return (
      <div className="update">
        <button type="button" className="update__btn" onClick={this.handleClick}>Update</button>
      </div>
    );
  }
}

Update.propTypes = {
  target: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Update;
