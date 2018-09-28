import React from 'react';
import PropTypes from 'prop-types';

class CreateRow extends React.Component{
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
      <div className="create__row" style={{display: reveal}}>
        <form className="create__form" onSubmit={this.handleSubmit}>
          <label>
            Seq<input type="text" name="seq" required/>
          </label>
          <label>
            Status<input type="text" name="status" required/>
          </label>
          <label>
            Category<input type="text" name="category" required/>
          </label>
          <label>
            Title<input type="text" name="title" required/>
          </label>
          <label>
            Owner<input type="text" name="owner" required/>
          </label>
          <label>
            Priority<input type="text" name="priority" required/>
          </label>
          <input type="submit" text="Submit" />
        </form>
      </div>
    );
  }
}

CreateRow.propTypes = {
  isClicked: PropTypes.bool,
  onSubmit: PropTypes.func
};

export default CreateRow;