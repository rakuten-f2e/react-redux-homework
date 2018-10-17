import { connect } from 'react-redux';
import { cellUpdater } from '../actions';
import TableCell from '../components/tableCell';

export const mapDispatchToProps = dispatch => ({
  onChange: (value) => {
    dispatch(cellUpdater(value));
  },
});

const tableCellContainer = connect(null, mapDispatchToProps)(TableCell);

export default tableCellContainer;
