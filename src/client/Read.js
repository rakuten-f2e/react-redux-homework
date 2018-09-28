import React from 'react';
import PropTypes from 'prop-types';
import ReadTable from './ReadTable';

class Read extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.onRead(e);
  }

  render(){
    return(
      <div className="read">
        <button className="read__btn" onClick={this.handleClick}>Read</button>
        <ReadTable isClicked={this.props.isClicked} onSubmit={this.props.receiveSearchData}/>
      </div>
    );
  }
}

Read.propTypes = {
  receiveSearchData: PropTypes.func,
  onRead: PropTypes.func,
  isClicked: PropTypes.bool
};

export default Read;