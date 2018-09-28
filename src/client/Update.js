import React from 'react';
import PropTypes from 'prop-types';

class Update extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onUpdate(this.props.target);
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
  target: PropTypes.object,
  onUpdate: PropTypes.func
};

export default Update;