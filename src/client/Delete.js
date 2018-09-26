import React from 'react';
import PropTypes from 'prop-types';

class Delete extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onClick(this.props.rowData);
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
  rowData: PropTypes.object,
  onClick: PropTypes.func
};

export default Delete;