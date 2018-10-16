import { connect } from 'react-redux';
import { deleteRow } from '../actions';
import Delete from '../components/delete';

export const mapDispatchToProps = dispatch => ({
  onClick: (targetRow) => {
    dispatch(deleteRow(targetRow));
  },
});

const DeleteContainer = connect(null, mapDispatchToProps)(Delete);

export default DeleteContainer;
