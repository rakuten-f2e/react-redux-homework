import React from 'react';
import PropTypes from 'prop-types';
import ReadTable from './ReadTable';

class Read extends React.Component{
  constructor(props){
    super(props);
    this.state = {isClicked: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      isClicked: true
    });
  }

  render(){
    return(
      <div className="read">
        <button className="btn__read" onClick={this.handleClick}>Read</button>
        <ReadTable isClicked={this.state.isClicked} onSubmit={this.props.receiveSearchData}/>
      </div>
    );
  }
}

Read.propTypes = {
  receiveSearchData: PropTypes.func
};

export default Read;