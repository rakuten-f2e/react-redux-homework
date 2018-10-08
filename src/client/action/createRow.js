import React from 'react';
import PropTypes from 'prop-types';

class CreateRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seq: -1,
      status: '',
      category: '',
      title: '',
      owner: '',
      priority: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { target } = e;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    const {
      seq,
      status,
      category,
      title,
      owner,
      priority,
    } = this.state;
    const { onSubmit } = this.props;
    const formData = {
      seq,
      status,
      category,
      title,
      owner,
      priority,
    };
    e.preventDefault();
    onSubmit(formData);
  }

  render() {
    const stateData = this.state;
    const { isClicked } = this.props;
    const reveal = isClicked ? 'block' : 'none';
    const labelNameList = [
      'seq',
      'status',
      'category',
      'title',
      'owner',
      'priority',
    ];

    return (
      <div className="create__row" style={{ display: reveal }}>
        <form className="create__form" onSubmit={this.handleSubmit}>
          {
            labelNameList.map(name => (
              <label htmlFor={name} key={`create-row-${name}`}>
                {name}
                <input
                  type="text"
                  name={name}
                  value={stateData[name]}
                  onChange={this.handleInputChange}
                  required
                />
              </label>
            ))
          }
          <input type="submit" text="submit" />
        </form>
      </div>
    );
  }
}

CreateRow.propTypes = {
  isClicked: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

CreateRow.defaultProps = {
  isClicked: false,
};

export default CreateRow;
