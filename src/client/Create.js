import React from 'react';
import PropTypes from 'prop-types';
import CreateRow from './CreateRow';

class Create extends React.Component{
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
      <div className="create">
        <button className="btn__create" onClick={this.handleClick}>Create</button>
        <CreateRow isClicked={this.state.isClicked} onSubmit={this.props.receiveCreatedData}/>
      </div>
    );
  }
}

Create.propTypes = {
  receiveCreatedData: PropTypes.func
};

export default Create;