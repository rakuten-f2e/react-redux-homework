import React from 'react';
import PropTypes from 'prop-types';
import ReadTable from './readTable';

class Read extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { onRead } = this.props;
    onRead(e);
  }

  render() {
    const { isClicked, receiveSearchData } = this.props;
    return (
      <div className="read">
        <button type="button" className="read__btn" value={isClicked} name="read" onClick={this.handleClick}>Read</button>
        <ReadTable isClicked={isClicked} onSubmit={receiveSearchData} />
      </div>
    );
  }
}

Read.propTypes = {
  receiveSearchData: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
  isClicked: PropTypes.bool,
};

Read.defaultProps = {
  isClicked: false,
};

export default Read;
