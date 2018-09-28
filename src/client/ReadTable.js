import React from 'react';
import PropTypes from 'prop-types';

class ReadTable extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(e);
  }

  render(){
    const reveal = this.props.isClicked ? 'block' : 'none';
    return(
      <div className="read__row" style={{display: reveal}}>
        <form className="read__form" onSubmit={this.handleSubmit}>
          <label>
            <input type="radio" name="key" value="seq" defaultChecked/> BySeq
            <input type="radio" name="key" value="owner"/> ByOwner 
          </label>
          <label>
            <input type="text" name="search"/>
          </label>
          <input type="submit" text="submit" />
        </form>
      </div>
    );
  }
}

ReadTable.propTypes = {
  isClicked: PropTypes.bool,
  onSubmit: PropTypes.func
};

export default ReadTable;