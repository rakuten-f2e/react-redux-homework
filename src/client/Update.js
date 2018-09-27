import React from 'react';
import PropTypes from 'prop-types';

class Update extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onUpdate(this.props.rowData);
  }

  render(){
    return(
      <div className="update">
        <button className="update__btn" onClick={this.handleClick}>Update</button>
      </div>
    );
  }
}

Update.propTypes = {
  rowData: PropTypes.object,
  onUpdate: PropTypes.func
};

export default Update;