import React from 'react';
import PropTypes from 'prop-types';

class Delete extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onDelete(this.props.target);
  }

  render(){
    return(
      <div className="delete">
        <button className="delete__btn" onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

Delete.propTypes = {
  target: PropTypes.object,
  onDelete: PropTypes.func
};

export default Delete;