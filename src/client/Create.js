import React from 'react';
import PropTypes from 'prop-types';
import CreateRow from './CreateRow';

class Create extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.onCreate(e);
  }

  render(){
    return(
      <div className="create">
        <button className="create__btn" value={this.props.isClicked} name="create" onClick={this.handleClick}>Create</button>
        <CreateRow isClicked={this.props.isClicked} onSubmit={this.props.receiveCreatedData}/>
      </div>
    );
  }
}

Create.propTypes = {
  receiveCreatedData: PropTypes.func,
  onCreate: PropTypes.func,
  isClicked: PropTypes.bool
};

export default Create;