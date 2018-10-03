import React from 'react';
import PropTypes from 'prop-types';

class CreateRow extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      seq: '',
      status: '',
      category: '',
      title: '',
      owner: '',
      priority: ''
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
    const { seq, status, category, title, owner, priority } = this.state;
    const { onSubmit } = this.props;
    const formData = {
      seq: seq,
      status: status,
      category: category,
      title: title,
      owner: owner,
      priority: priority
    };
    e.preventDefault();
    onSubmit(formData);
  }

  render(){
    const { seq, status, category, title, owner, priority } = this.state;
    const { isClicked } = this.props;
    const reveal = isClicked ? 'block' : 'none';
    return(
      <div className="create__row" style={{display: reveal}}>
        <form className="create__form" onSubmit={this.handleSubmit}>
          <label htmlFor="seq">
            Seq
            <input type="text" name="seq" value={seq} onChange={this.handleInputChange} required />
          </label>
          <label htmlFor="status">
            Status
            <input type="text" name="status" value={status} onChange={this.handleInputChange} required />
          </label>
          <label htmlFor="category">
            Category
            <input type="text" name="category" value={category} onChange={this.handleInputChange} required />
          </label>
          <label htmlFor="title">
            Title
            <input type="text" name="title" value={title} onChange={this.handleInputChange} required />
          </label>
          <label htmlFor="owner">
            Owner
            <input type="text" name="owner" value={owner} onChange={this.handleInputChange} required />
          </label>
          <label htmlFor="priority">
            Priority
            <input type="text" name="priority" value={priority} onChange={this.handleInputChange} required />
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