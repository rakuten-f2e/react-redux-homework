import React from 'react';
import PropTypes from 'prop-types';

class ReadTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      key: 'seq',
      search: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    const { key, search } = this.state;
    const { onSubmit } = this.props;
    const searchData = {
      key: key,
      search: search
    };

    e.preventDefault();
    onSubmit(searchData);
  }

  render(){
    const { search } = this.state;
    const { isClicked } = this.props;
    const reveal = isClicked ? 'block' : 'none';
    return(
      <div className="read__row" style={{display: reveal}}>
        <form className="read__form" onSubmit={this.handleSubmit}>
          <label htmlFor="key">
            <input type="radio" name="key" value="seq" onChange={this.handleInputChange} defaultChecked /> 
            BySeq
            <input type="radio" name="key" value="owner" onChange={this.handleInputChange} /> 
            ByOwner 
          </label>
          <label htmlFor="search">
            <input type="text" name="search" value={search} onChange={this.handleInputChange} />
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