import { connect } from 'react-redux';
import { rowDeleter } from '../actions';
import DeleteBtn from '../components/deleteBtn';

export const mapDispatchToProps = dispatch => ({
  onClick: (targetRow) => {
    dispatch(rowDeleter(targetRow));
  },
});

const DeleteBtnContainer = connect(null, mapDispatchToProps)(DeleteBtn);

export default DeleteBtnContainer;
