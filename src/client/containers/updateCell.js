import { connect } from 'react-redux';
import { updateCell } from '../actions';
import TableCell from '../components/tableCell';

const mapDispatchToProps = dispatch => ({
  onChange: (value) => {
    dispatch(updateCell(value));
  },
});

const UpdateCell = connect(null, mapDispatchToProps)(TableCell);

export default UpdateCell;
