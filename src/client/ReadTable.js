import React from 'react';
import PropTypes from 'prop-types';

class ReadTable extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(e);
  }

  render(){
    const { isClicked } = this.props;
    const reveal = isClicked ? 'block' : 'none';
    return(
      <div className="read__row" style={{display: reveal}}>
        <form className="read__form" onSubmit={this.handleSubmit}>
          <label htmlFor="key">
            <input type="radio" name="key" value="seq" defaultChecked /> 
            BySeq
            <input type="radio" name="key" value="owner" /> 
            ByOwner 
          </label>
          <label htmlFor="search">
            <input type="text" name="search" />
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

ReadTable.defaultProps = {
  isClicked: false,
  onSubmit: () => {}
};

export default ReadTable;