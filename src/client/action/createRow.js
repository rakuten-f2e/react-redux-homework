import React from 'react';
import PropTypes from 'prop-types';

class CreateRow extends React.Component{

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
      <div className="create__row" style={{display: reveal}}>
        <form className="create__form" onSubmit={this.handleSubmit}>
          <label htmlFor="seq">
            Seq
            <input type="text" name="seq" required />
          </label>
          <label htmlFor="status">
            Status
            <input type="text" name="status" required />
          </label>
          <label htmlFor="category">
            Category
            <input type="text" name="category" required />
          </label>
          <label htmlFor="title">
            Title
            <input type="text" name="title" required />
          </label>
          <label htmlFor="owner">
            Owner
            <input type="text" name="owner" required />
          </label>
          <label htmlFor="priority">
            Priority
            <input type="text" name="priority" required />
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

CreateRow.defaultProps = {
  isClicked: false,
  onSubmit: () => {}
};

export default CreateRow;