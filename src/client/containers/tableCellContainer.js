import { connect } from 'react-redux';
import { updateCell } from '../actions';
import TableCell from '../components/tableCell';

export const mapDispatchToProps = dispatch => ({
  onChange: (value) => {
    dispatch(updateCell(value));
  },
});

const tableCellContainer = connect(null, mapDispatchToProps)(TableCell);

export default tableCellContainer;
