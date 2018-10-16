import { connect } from 'react-redux';
import { createRow } from '../actions';
import Create from '../components/create';

const mapStateToProps = state => ({
  id: state.table[state.table.length - 1].seq + 1,
});

export const mapDispatchToProps = dispatch => ({
  onClick: (newRow) => {
    dispatch(createRow(newRow));
  },
});

const CreateContainer = connect(mapStateToProps, mapDispatchToProps)(Create);

export default CreateContainer;
