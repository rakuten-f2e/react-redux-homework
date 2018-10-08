import React from 'react';
import PropTypes from 'prop-types';
import CreateRow from './createRow';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { onCreate } = this.props;
    onCreate(e);
  }

  render() {
    const { isClicked, receiveCreatedData } = this.props;
    return (
      <div className="create">
        <button type="button" className="create__btn" value={isClicked} name="create" onClick={this.handleClick}>Create</button>
        <CreateRow isClicked={isClicked} onSubmit={receiveCreatedData} />
      </div>
    );
  }
}

Create.propTypes = {
  receiveCreatedData: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  isClicked: PropTypes.bool,
};

Create.defaultProps = {
  isClicked: false,
};

export default Create;
