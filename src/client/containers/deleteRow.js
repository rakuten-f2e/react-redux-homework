import { connect } from 'react-redux';
import { deleteRow } from '../actions';
import Delete from '../components/delete';

const mapDispatchToProps = dispatch => ({
  onClick: (targetRow) => {
    dispatch(deleteRow(targetRow));
  },
});

const DeleteRow = connect(null, mapDispatchToProps)(Delete);

export default DeleteRow;
